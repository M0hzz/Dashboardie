# ⚡ Quick Start Guide

Get your Dreamboard up and running in 5 minutes!

## 🎯 Three Ways to Use Dreamboard

### Option 1: Local Development (Recommended for Testing)
```bash
npm install
npm run dev
```
Open http://localhost:5173

### Option 2: Build and Preview
```bash
npm install
npm run build
npm run preview
```

### Option 3: Deploy and Use Online
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🚀 First-Time Setup

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd Dashboardie
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: http://localhost:5173

---

## 📝 Your First 5 Minutes

### Add Your First Dream
1. Click "Add Dream" button
2. Enter: **Title:** "Learn to play guitar"
3. Enter: **Description:** "Master 10 songs by end of year"
4. Click "Add Dream"

### Set Your First Goal
1. Click "Add Goal" button
2. Enter: **Title:** "Read 12 books this year"
3. Enter: **Description:** "One book per month"
4. Set a **Deadline**
5. Adjust progress slider
6. Click "Add Goal"

### Track Your First Habit
1. Click "Add Habit" button
2. Enter: **Title:** "Morning meditation"
3. Enter: **Description:** "10 minutes each morning"
4. Select: **Frequency:** Daily
5. Click "Add Habit"
6. Click "Mark Complete" to start your streak!

### Get Inspired
1. Click "Get AI Inspiration" at the top
2. Read your motivational message
3. Feel motivated! ✨

---

## 💡 Pro Tips

### Data Persistence
- Your data saves automatically to browser localStorage
- Close the browser and reopen - your data will still be there!
- Each browser stores its own data (Chrome vs Firefox = separate data)

### Mobile Access
- Works great on mobile!
- Add to home screen for app-like experience:
  - **iOS:** Safari → Share → "Add to Home Screen"
  - **Android:** Chrome → Menu → "Add to Home Screen"

### Staying Organized
- Use descriptive titles for easy scanning
- Update goal progress regularly for motivation
- Check in with habits daily for streak momentum

### Backing Up Your Data
Your data is stored in browser localStorage. To back up:
1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Copy the `dreams`, `goals`, and `habits` entries
4. Save to a text file

(Automatic export feature coming soon!)

---

## 🎨 Quick Customization

### Change the Color Theme
Edit `src/App.jsx`, line 413:
```jsx
// Find this line:
className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"

// Change to blue theme:
className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900"

// Or green theme:
className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900"
```

### Modify the Header
Edit `src/App.jsx`, lines 414-419:
```jsx
<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
  🌟 My Personal Dashboard
</h1>
```

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 5173
npx kill-port 5173
npm run dev
```

### Dependencies Issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build
# Check the error message and ensure all files are saved
```

### Data Not Persisting
- Check browser privacy settings (localStorage must be enabled)
- Ensure you're not in incognito/private mode
- Try a different browser

---

## 🎯 Next Steps

1. **Use it daily** - The more you use it, the more valuable it becomes
2. **Start small** - Add 1-3 dreams, 2-3 goals, and 2-3 habits
3. **Review weekly** - Check your progress every Sunday
4. **Customize** - After a week, add features you need
5. **Deploy** - Put it online so you can access anywhere

---

## 🌟 Success Checklist

- [ ] App running locally
- [ ] First dream added
- [ ] First goal created
- [ ] First habit tracked
- [ ] AI inspiration tried
- [ ] Data persists after refresh
- [ ] Tested on mobile
- [ ] Added to home screen
- [ ] Deployed online (optional)
- [ ] Using it daily!

---

## 📚 Learn More

- **Full README:** [README.md](./README.md)
- **Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com

---

**You're all set! Start tracking your dreams today!** 🚀✨

Need help? Check the full [README.md](./README.md) or open an issue on GitHub.