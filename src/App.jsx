import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Target,
  CheckCircle2,
  PlusCircle,
  Trash2,
  Edit2,
  Calendar,
  TrendingUp,
  Heart,
  Star,
  Zap
} from 'lucide-react';

// Custom hook for localStorage persistence
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Dream Card Component
const DreamCard = ({ dream, onDelete, onEdit }) => {
  return (
    <div className="group relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-up">
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button
          onClick={() => onEdit(dream)}
          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
        >
          <Edit2 size={16} className="text-white" />
        </button>
        <button
          onClick={() => onDelete(dream.id)}
          className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors"
        >
          <Trash2 size={16} className="text-white" />
        </button>
      </div>

      {dream.image && (
        <img
          src={dream.image}
          alt={dream.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Star className="text-yellow-400" size={20} />
        {dream.title}
      </h3>
      <p className="text-gray-200 mb-3">{dream.description}</p>
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <Calendar size={14} />
        <span>Created {new Date(dream.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

// Goal Card Component
const GoalCard = ({ goal, onDelete, onUpdateProgress }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Target className="text-cyan-400" size={20} />
            {goal.title}
          </h3>
          <p className="text-gray-200 text-sm mb-2">{goal.description}</p>
          {goal.deadline && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Calendar size={14} />
              <span>Target: {new Date(goal.deadline).toLocaleDateString()}</span>
            </div>
          )}
        </div>
        <button
          onClick={() => onDelete(goal.id)}
          className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors"
        >
          <Trash2 size={16} className="text-white" />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Progress</span>
          <span className="text-sm font-bold text-cyan-400">{goal.progress}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3 mb-3">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={goal.progress}
          onChange={(e) => onUpdateProgress(goal.id, parseInt(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
};

// Habit Card Component
const HabitCard = ({ habit, onDelete, onToggleToday }) => {
  const today = new Date().toDateString();
  const completedToday = habit.completedDates?.includes(today);
  const currentStreak = habit.streak || 0;

  return (
    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            {habit.title}
          </h3>
          <p className="text-gray-200 text-sm mb-2">{habit.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-300 flex items-center gap-1">
              <TrendingUp size={14} />
              {currentStreak} day streak
            </span>
            <span className="text-gray-300">{habit.frequency}</span>
          </div>
        </div>
        <button
          onClick={() => onDelete(habit.id)}
          className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors"
        >
          <Trash2 size={16} className="text-white" />
        </button>
      </div>

      <button
        onClick={() => onToggleToday(habit.id)}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          completedToday
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-white/10 hover:bg-white/20 text-gray-200'
        }`}
      >
        <CheckCircle2 size={20} />
        {completedToday ? 'Completed Today!' : 'Mark Complete'}
      </button>
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 max-w-md w-full border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [dreams, setDreams] = useLocalStorage('dreams', []);
  const [goals, setGoals] = useLocalStorage('goals', []);
  const [habits, setHabits] = useLocalStorage('habits', []);

  const [showDreamModal, setShowDreamModal] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);

  const [newDream, setNewDream] = useState({ title: '', description: '', image: '' });
  const [newGoal, setNewGoal] = useState({ title: '', description: '', deadline: '', progress: 0 });
  const [newHabit, setNewHabit] = useState({ title: '', description: '', frequency: 'Daily' });
  const [aiInspiration, setAiInspiration] = useState('');

  // Add Dream
  const addDream = () => {
    if (newDream.title) {
      setDreams([...dreams, { ...newDream, id: Date.now(), createdAt: new Date() }]);
      setNewDream({ title: '', description: '', image: '' });
      setShowDreamModal(false);
    }
  };

  // Add Goal
  const addGoal = () => {
    if (newGoal.title) {
      setGoals([...goals, { ...newGoal, id: Date.now(), createdAt: new Date() }]);
      setNewGoal({ title: '', description: '', deadline: '', progress: 0 });
      setShowGoalModal(false);
    }
  };

  // Add Habit
  const addHabit = () => {
    if (newHabit.title) {
      setHabits([...habits, {
        ...newHabit,
        id: Date.now(),
        createdAt: new Date(),
        completedDates: [],
        streak: 0
      }]);
      setNewHabit({ title: '', description: '', frequency: 'Daily' });
      setShowHabitModal(false);
    }
  };

  // Delete functions
  const deleteDream = (id) => setDreams(dreams.filter(d => d.id !== id));
  const deleteGoal = (id) => setGoals(goals.filter(g => g.id !== id));
  const deleteHabit = (id) => setHabits(habits.filter(h => h.id !== id));

  // Update Goal Progress
  const updateGoalProgress = (id, progress) => {
    setGoals(goals.map(g => g.id === id ? { ...g, progress } : g));
  };

  // Toggle Habit Completion
  const toggleHabitToday = (id) => {
    const today = new Date().toDateString();
    setHabits(habits.map(h => {
      if (h.id === id) {
        const completedDates = h.completedDates || [];
        const isCompleted = completedDates.includes(today);

        let newCompletedDates;
        let newStreak = h.streak || 0;

        if (isCompleted) {
          newCompletedDates = completedDates.filter(date => date !== today);
          newStreak = Math.max(0, newStreak - 1);
        } else {
          newCompletedDates = [...completedDates, today];
          newStreak = newStreak + 1;
        }

        return { ...h, completedDates: newCompletedDates, streak: newStreak };
      }
      return h;
    }));
  };

  // Generate AI Inspiration (placeholder - you can integrate with Claude API)
  const generateAIInspiration = () => {
    const inspirations = [
      "Every great dream begins with a dreamer. Remember, you have within you the strength, patience, and passion to reach for the stars.",
      "Your vision will become clear only when you look into your heart. Who looks outside, dreams; who looks inside, awakens.",
      "The future belongs to those who believe in the beauty of their dreams. Take one small step today.",
      "Don't watch the clock; do what it does. Keep going. Your consistent effort compounds over time.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. Keep pushing forward!",
    ];
    const random = inspirations[Math.floor(Math.random() * inspirations.length)];
    setAiInspiration(random);
    setShowAIModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Heart className="text-pink-400" size={48} />
          Dreamboard
        </h1>
        <p className="text-xl text-gray-200">Your Personal Life Dashboard</p>
        <button
          onClick={generateAIInspiration}
          className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
        >
          <Sparkles size={20} />
          Get AI Inspiration
        </button>
      </header>

      {/* Dreams Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <Star className="text-yellow-400" />
            Dreams
          </h2>
          <button
            onClick={() => setShowDreamModal(true)}
            className="px-4 py-2 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Dream
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.length === 0 ? (
            <p className="text-gray-300 col-span-full text-center py-8">No dreams yet. Start by adding your first dream!</p>
          ) : (
            dreams.map(dream => (
              <DreamCard
                key={dream.id}
                dream={dream}
                onDelete={deleteDream}
                onEdit={(d) => console.log('Edit', d)}
              />
            ))
          )}
        </div>
      </section>

      {/* Goals Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <Target className="text-cyan-400" />
            Goals
          </h2>
          <button
            onClick={() => setShowGoalModal(true)}
            className="px-4 py-2 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Goal
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.length === 0 ? (
            <p className="text-gray-300 col-span-full text-center py-8">No goals yet. Set your first goal!</p>
          ) : (
            goals.map(goal => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onDelete={deleteGoal}
                onUpdateProgress={updateGoalProgress}
              />
            ))
          )}
        </div>
      </section>

      {/* Habits Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <Zap className="text-yellow-400" />
            Habits
          </h2>
          <button
            onClick={() => setShowHabitModal(true)}
            className="px-4 py-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Habit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.length === 0 ? (
            <p className="text-gray-300 col-span-full text-center py-8">No habits yet. Create your first habit!</p>
          ) : (
            habits.map(habit => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onDelete={deleteHabit}
                onToggleToday={toggleHabitToday}
              />
            ))
          )}
        </div>
      </section>

      {/* Add Dream Modal */}
      <Modal isOpen={showDreamModal} onClose={() => setShowDreamModal(false)} title="Add New Dream">
        <input
          type="text"
          placeholder="Dream title"
          value={newDream.title}
          onChange={(e) => setNewDream({ ...newDream, title: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Dream description"
          value={newDream.description}
          onChange={(e) => setNewDream({ ...newDream, description: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newDream.image}
          onChange={(e) => setNewDream({ ...newDream, image: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="flex gap-3">
          <button
            onClick={addDream}
            className="flex-1 px-4 py-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-600 transition-colors"
          >
            Add Dream
          </button>
          <button
            onClick={() => setShowDreamModal(false)}
            className="flex-1 px-4 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Add Goal Modal */}
      <Modal isOpen={showGoalModal} onClose={() => setShowGoalModal(false)} title="Add New Goal">
        <input
          type="text"
          placeholder="Goal title"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          placeholder="Goal description"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-24"
        />
        <input
          type="date"
          value={newGoal.deadline}
          onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <div className="flex gap-3">
          <button
            onClick={addGoal}
            className="flex-1 px-4 py-3 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600 transition-colors"
          >
            Add Goal
          </button>
          <button
            onClick={() => setShowGoalModal(false)}
            className="flex-1 px-4 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Add Habit Modal */}
      <Modal isOpen={showHabitModal} onClose={() => setShowHabitModal(false)} title="Add New Habit">
        <input
          type="text"
          placeholder="Habit title"
          value={newHabit.title}
          onChange={(e) => setNewHabit({ ...newHabit, title: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Habit description"
          value={newHabit.description}
          onChange={(e) => setNewHabit({ ...newHabit, description: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 h-24"
        />
        <select
          value={newHabit.frequency}
          onChange={(e) => setNewHabit({ ...newHabit, frequency: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="Daily" className="bg-gray-800">Daily</option>
          <option value="Weekly" className="bg-gray-800">Weekly</option>
          <option value="Monthly" className="bg-gray-800">Monthly</option>
        </select>
        <div className="flex gap-3">
          <button
            onClick={addHabit}
            className="flex-1 px-4 py-3 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors"
          >
            Add Habit
          </button>
          <button
            onClick={() => setShowHabitModal(false)}
            className="flex-1 px-4 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* AI Inspiration Modal */}
      <Modal isOpen={showAIModal} onClose={() => setShowAIModal(false)} title="AI Inspiration">
        <div className="mb-6">
          <p className="text-gray-200 text-lg leading-relaxed">{aiInspiration}</p>
        </div>
        <button
          onClick={() => setShowAIModal(false)}
          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
        >
          Close
        </button>
      </Modal>

      {/* Footer */}
      <footer className="text-center text-gray-300 mt-12 pb-8">
        <p className="text-sm">✨ Built with React, Tailwind CSS, and inspiration ✨</p>
      </footer>
    </div>
  );
}

export default App;
