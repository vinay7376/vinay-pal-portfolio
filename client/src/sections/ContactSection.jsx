import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitContactForm } from '../utils/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // bot protection trap
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message, refId }
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid corporate or personal email.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await submitContactForm(formData);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#00D8FE', '#818cf8', '#34d399', '#f59e0b']
        });
      } catch (confettiErr) {
        // Safe if canvas-confetti doesn't execute
      }

      setSubmitStatus({
        type: 'success',
        message: response.message || 'Message delivered successfully to Vinay Pal!',
        refId: response.referenceId || 'N/A'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Unable to submit your inquiry right now. Please email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/10 bg-[#05060a]">
      {/* Ambient background light */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-brand-cyan border border-brand-cyan/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Engineering Communication</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Let's build something <span className="text-display-cyan">exceptional together</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Open for software engineering opportunities, internships, and technical collaboration.
          </p>
        </div>

        {/* Split Layout: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Reachout Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="studio-glass p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Direct Email</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Inbox Monitored Daily
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-white font-mono break-all text-display-cyan">
                  {PERSONAL_INFO.email}
                </div>
                <p className="text-xs text-slate-400">
                  Fastest way to get in touch for interviews, discussions, or inquiries.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-glow-blue uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-300 studio-pill hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="studio-glass p-6 rounded-3xl border border-white/10 shadow-2xl space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Professional Networks
              </h4>

              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-brand-cyan/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">/in/vinaypal7376</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-brand-cyan/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/10 text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">@vinay7376</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability Meta */}
            <div className="p-4 rounded-2xl bg-black/35 border border-white/5 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Typical Response Time: &lt; 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-violet" />
                <span>Prayagraj, UP, India (Open to Remote / Relocation)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form Connected to Express + MongoDB */}
          <div className="lg:col-span-7">
            <div className="studio-glass p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-cyan" />
                    Dispatch a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Submissions are rate-limited, validated, and saved in MongoDB.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/30">
                  Rate-Limited Gateway
                </span>
              </div>

              {/* Status Banner */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs flex items-start gap-3 border ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-rose-400" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold">{submitStatus.message}</p>
                    {submitStatus.refId && submitStatus.refId !== 'N/A' && (
                      <p className="font-mono text-[11px] opacity-80">
                        MongoDB Reference ID: {submitStatus.refId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot Spam Trap */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                        formErrors.name
                          ? 'border-rose-500/60 focus:ring-rose-500'
                          : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan'
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                        formErrors.email
                          ? 'border-rose-500/60 focus:ring-rose-500'
                          : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan'
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., SDE Internship Interview / Full-Stack Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      formErrors.subject
                        ? 'border-rose-500/60 focus:ring-rose-500'
                        : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan'
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-rose-400">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      {formData.message.length}/3000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={3000}
                    placeholder="Hi Vinay, I reviewed your PayRecover AI and Swag-e-Swaad projects and would like to discuss..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all resize-y ${
                      formErrors.message
                        ? 'border-rose-500/60 focus:ring-rose-500'
                        : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan'
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-glow-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry to MongoDB API...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Inquiry to Vinay Pal</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
