# 🍳 ChefClaude – AI-Powered Recipe Generator

**ChefClaude** is an interactive web application that generates personalized recipes using **Mistral AI**.  
Users can add ingredients they have on hand, and the app instantly suggests creative recipes tailored to those ingredients.

---

## ✨ Features

- **Dynamic Ingredient Management**
  - Add ingredients via a form with duplicate prevention.
  - Click an ingredient to delete it with a smooth, interactive UI.
- **AI-Powered Recipe Suggestions**
  - Connects to Mistral AI via a custom API integration (`getRecipeFromMistral`) to generate recipe recommendations.
  - Displays previous recommendations when the ingredient list is reset.
- **Responsive & Accessible UI**
  - Built with **Tailwind CSS** for modern styling and mobile responsiveness.
  - Accessible form labels, aria-live updates for dynamic content.
- **State Management with React Hooks**
  - `useState` for real-time ingredient and recipe updates.
  - Loading state indicator when fetching from the AI API.

---

## 🛠 Tech Stack

- **Frontend:** React (TypeScript), Tailwind CSS
- **AI Integration:** Mistral AI API (via custom helper function)
- **Routing:** React Router
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## 🔗 Live Demo & Code

- **Live Demo:** <a href="https://chef-claude-navy.vercel.app/" target="_blank">View Demo</a>
- **Source Code:** <a href="https://github.com/alfeusrudyanta/ChefClaude" target="_blank">GitHub Repository</a>

---

## 💡 Learning Highlights

- Integrated AI APIs into a React frontend for real-time, user-driven content generation.
- Created reusable, accessible components in TypeScript.
- Leveraged Tailwind’s utility-first classes for rapid prototyping and responsive design.
