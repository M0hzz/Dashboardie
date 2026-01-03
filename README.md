# 🌟 Dreamboard - Your Personal Life Dashboard

A beautiful, streamlined personal web app for tracking dreams, goals, and habits. Built with React, Tailwind CSS, and designed for solo use with simple hosting and minimal maintenance.

![Made with React](https://img.shields.io/badge/React-18.3-blue)
![Styled with Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

## ✨ Features

### 🌈 Dreams Section
- Add and track your dreams with titles, descriptions, and images
- Beautiful card-based layout with smooth animations
- AI-powered inspiration generator for motivation
- Visual timeline showing when each dream was created

### 🎯 Goals Section
- Create goals with deadlines and descriptions
- Interactive progress tracking with visual sliders
- Real-time progress percentage display
- Gradient progress bars for visual feedback

### ⚡ Habits Section
- Daily/weekly/monthly habit tracking
- Streak counter to maintain motivation
- One-tap check-in for daily completion
- Visual feedback for completed habits

### 💾 Data Persistence
- Everything saves automatically to browser localStorage
- Data persists across sessions
- No backend required - works completely offline
- Export/backup features (coming soon)

### 🎨 Beautiful Design
- Stunning gradient UI with glassmorphism effects
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Dark theme optimized for extended use

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Dashboardie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)
3. Get your live URL instantly!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Or use the web interface:**
- Push your code to GitHub
- Connect your repo on [vercel.com](https://vercel.com)
- Deploy automatically

### Option 3: GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/Dashboardie"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## 🎯 Usage Guide

### Adding a Dream
1. Click "Add Dream" in the Dreams section
2. Enter a title and description
3. Optionally add an image URL
4. Click "Add Dream" to save

### Creating a Goal
1. Click "Add Goal" in the Goals section
2. Enter title, description, and target deadline
3. Use the slider to update progress as you work
4. Track your progress visually

### Tracking a Habit
1. Click "Add Habit" in the Habits section
2. Set the title, description, and frequency (Daily/Weekly/Monthly)
3. Click "Mark Complete" each time you complete the habit
4. Watch your streak grow!

### Getting AI Inspiration
1. Click "Get AI Inspiration" at the top
2. Receive motivational quotes and insights
3. Use them to fuel your journey

## 🛠️ Technology Stack

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 6.0
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **State Management:** React Hooks + localStorage
- **Animations:** Tailwind CSS animations

## 📁 Project Structure

```
Dashboardie/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles & Tailwind imports
├── public/               # Static assets
├── dist/                 # Production build output
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Customization

### Changing Colors

Edit `src/App.jsx` to change the gradient colors:
```jsx
// Current: Purple/Pink theme
className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"

// Example: Blue/Teal theme
className="bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900"
```

### Adding New Features

The app is built with modularity in mind. Some ideas:
- Categories for dreams (Work, Health, Travel)
- Weekly review prompts
- Data export as JSON
- Mood tracker
- Gratitude list
- Daily journal entries

## 💡 Tips for Solo Development

1. **Start Simple:** Use the app for a week before adding features
2. **Iterate Based on Need:** Only add features you actually need
3. **Back Up Your Data:** Periodically export your localStorage data
4. **Mobile First:** Test on your phone - that's where you'll use it most
5. **Keep It Personal:** Customize it to match your workflow

## 🔒 Data Privacy

- All data is stored locally in your browser
- No data is sent to any server
- No analytics or tracking
- Your dreams, goals, and habits are 100% private

## 📈 Roadmap

- [ ] Data export/import functionality
- [ ] Categories and tags for dreams
- [ ] Weekly review feature
- [ ] Statistics dashboard
- [ ] Dark/light theme toggle
- [ ] Cloud sync option (optional)
- [ ] Mobile app version

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this for your personal dreamboard!

## 🙏 Acknowledgments

- Built with inspiration from the personal development community
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for personal growth and development**

Start tracking your dreams today! 🌟