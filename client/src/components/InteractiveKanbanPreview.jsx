import React, { useState } from 'react';
import { Plus, CheckCircle2, Clock, AlertCircle, ArrowRight, ArrowLeft, Tag } from 'lucide-react';

const INITIAL_TASKS = [
  {
    id: 't-1',
    title: 'Razorpay Webhook Verification & HMAC SHA-256',
    status: 'in-progress',
    priority: 'Urgent',
    tag: 'Backend / Security',
    subtasks: [
      { text: 'Validate webhook signature', done: true },
      { text: 'Verify idempotency key in DB', done: true },
      { text: 'Update transaction audit ledger', done: false }
    ]
  },
  {
    id: 't-2',
    title: 'Food Item Variant & Custom Add-ons Engine',
    status: 'completed',
    priority: 'High',
    tag: 'Full-Stack MERN',
    subtasks: [
      { text: 'Deterministic configuration hashing', done: true },
      { text: 'Real-time cart price recalculation', done: true }
    ]
  },
  {
    id: 't-3',
    title: 'Rate-Limit Middleware & Honeypot Bot Shield',
    status: 'completed',
    priority: 'Medium',
    tag: 'Security',
    subtasks: [
      { text: 'IP sliding window tracker', done: true },
      { text: 'Zero-latency memory fallback', done: true }
    ]
  },
  {
    id: 't-4',
    title: 'AI Recovery Guardrails Policy Pipeline',
    status: 'todo',
    priority: 'High',
    tag: 'Applied AI',
    subtasks: [
      { text: 'High-value threshold check (₹10k)', done: false },
      { text: 'Confidence floor validation (0.65)', done: false }
    ]
  }
];

const COLUMNS = [
  { id: 'todo', title: 'To Do', color: 'border-slate-500/40 text-slate-300' },
  { id: 'in-progress', title: 'In Progress', color: 'border-blue-500/40 text-blue-400' },
  { id: 'completed', title: 'Completed', color: 'border-emerald-500/40 text-emerald-400' },
];

export default function InteractiveKanbanPreview() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filterPriority, setFilterPriority] = useState('All');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const moveTask = (taskId, direction) => {
    const colOrder = ['todo', 'in-progress', 'completed'];
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const currentIndex = colOrder.indexOf(t.status);
      const nextIndex = direction === 'next' ? Math.min(currentIndex + 1, colOrder.length - 1) : Math.max(currentIndex - 1, 0);
      return { ...t, status: colOrder[nextIndex] };
    }));
  };

  const toggleSubtask = (taskId, subtaskIndex) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const updatedSubtasks = [...t.subtasks];
      updatedSubtasks[subtaskIndex] = {
        ...updatedSubtasks[subtaskIndex],
        done: !updatedSubtasks[subtaskIndex].done
      };
      return { ...t, subtasks: updatedSubtasks };
    }));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: `t-${Date.now()}`,
      title: newTaskTitle.trim(),
      status: 'todo',
      priority: 'Medium',
      tag: 'New Feature',
      subtasks: [{ text: 'Initial implementation', done: false }]
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
    setShowAddForm(false);
  };

  const filteredTasks = tasks.filter(t => filterPriority === 'All' || t.priority === filterPriority);

  return (
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 shadow-glass">
      {/* Board Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="text-base font-semibold text-white">Live Interactive Kanban Simulator</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Demonstrating optimistic UI state transitions, subtask checklists, and reactive state management.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/5 text-xs">
            {['All', 'Urgent', 'High', 'Medium'].map(p => (
              <button
                key={p}
                onClick={() => setFilterPriority(p)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filterPriority === p ? 'bg-brand-blue text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Add Task Quick Drawer */}
      {showAddForm && (
        <form onSubmit={addTask} className="mb-6 p-3 bg-black/40 rounded-xl border border-white/10 flex gap-2 animate-fadeIn">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task name (e.g., Optimize MongoDB composite query index)..."
            className="flex-1 bg-dark-bg border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue"
            autoFocus
          />
          <button
            type="submit"
            className="px-4 py-2 bg-brand-blue text-slate-900 font-semibold text-xs rounded-lg hover:bg-sky-400 transition-colors"
          >
            Create
          </button>
        </form>
      )}

      {/* Board Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLUMNS.map(col => {
          const colTasks = filteredTasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="bg-black/25 rounded-xl p-3 border border-white/5 flex flex-col min-h-[280px]">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${col.color}`}>
                    {col.title}
                  </span>
                  <span className="text-[11px] font-mono bg-white/5 px-2 py-0.5 rounded-full text-slate-400">
                    {colTasks.length}
                  </span>
                </div>
              </div>

              {/* Tasks in column */}
              <div className="space-y-3 flex-1">
                {colTasks.length === 0 ? (
                  <div className="h-28 flex items-center justify-center text-xs text-slate-600 border border-dashed border-white/5 rounded-lg">
                    No tasks here
                  </div>
                ) : (
                  colTasks.map(task => {
                    const completedSubtasks = task.subtasks.filter(s => s.done).length;
                    const percent = Math.round((completedSubtasks / task.subtasks.length) * 100);

                    return (
                      <div
                        key={task.id}
                        className="p-3 bg-dark-card/90 rounded-lg border border-white/10 hover:border-brand-blue/40 transition-all shadow-sm group"
                      >
                        {/* Tags and Priority */}
                        <div className="flex items-center justify-between text-[10px] mb-2">
                          <span className="text-slate-400 font-mono flex items-center gap-1">
                            <Tag className="w-3 h-3 text-brand-blue" />
                            {task.tag}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded font-medium ${
                              task.priority === 'Urgent'
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                : task.priority === 'High'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-slate-700/40 text-slate-300 border border-slate-600/30'
                            }`}
                          >
                            {task.priority}
                          </span>
                        </div>

                        {/* Title */}
                        <h5 className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                          {task.title}
                        </h5>

                        {/* Subtasks Progress */}
                        <div className="mt-3 pt-2 border-t border-white/5">
                          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                            <span>Checklist</span>
                            <span className="font-mono text-brand-blue">{completedSubtasks}/{task.subtasks.length} ({percent}%)</span>
                          </div>
                          <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                              style={{ width: `${percent}%` }}
                            />
                          </div>

                          {/* Subtask items interactive */}
                          <div className="mt-2 space-y-1">
                            {task.subtasks.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                type="button"
                                onClick={() => toggleSubtask(task.id, sIdx)}
                                className="w-full text-left flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                              >
                                <span className={`w-3 h-3 rounded flex items-center justify-center border ${
                                  sub.done ? 'bg-brand-blue border-brand-blue text-slate-900' : 'border-slate-600'
                                }`}>
                                  {sub.done && <CheckCircle2 className="w-2.5 h-2.5" />}
                                </span>
                                <span className={sub.done ? 'line-through text-slate-500' : ''}>
                                  {sub.text}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Move Buttons */}
                        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          {col.id !== 'todo' ? (
                            <button
                              onClick={() => moveTask(task.id, 'prev')}
                              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                              title="Move back"
                            >
                              <ArrowLeft className="w-3 h-3" /> Back
                            </button>
                          ) : <div />}

                          {col.id !== 'completed' && (
                            <button
                              onClick={() => moveTask(task.id, 'next')}
                              className="text-brand-blue hover:text-sky-300 font-medium flex items-center gap-1 transition-colors ml-auto"
                              title="Advance state"
                            >
                              Advance <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
