# 🌿 Paradise Nursery — E-Plant Shopping

A modern e-commerce front-end for browsing and purchasing plants, built with **React** and **Redux Toolkit**.

> _Where Green Meets Serenity_

## ✨ Features

- 🏠 **Landing Page** — Beautiful hero section with animated content and About Us
- 🌱 **Product Catalog** — Browse plants by category (Air Purifying, Aromatic, Medicinal, etc.)
- 🛒 **Shopping Cart** — Add/remove items, adjust quantities, view totals
- 🔄 **State Management** — Global cart state powered by Redux Toolkit
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- ⚡ **Fast** — Built with Vite for lightning-fast dev and build

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State management |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [GitHub Pages](https://pages.github.com/) | Deployment |

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutUs/          # About Us section
│   ├── CartItem/         # Shopping cart page
│   └── ProductList/      # Product catalog & navbar
├── data/
│   └── plantsData.js     # Plant catalog data
├── store/
│   ├── cartSlice.js      # Redux cart slice (add, remove, update)
│   └── store.js          # Redux store configuration
├── App.jsx               # Main app with landing page routing
├── App.css               # Landing page & layout styles
├── index.css             # Design system (variables, reset, fonts)
└── main.jsx              # Entry point with Redux Provider
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nguyen-Van-Gia-Binh/e-plantShopping.git

# Navigate to the project
cd e-plantShopping

# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Open [http://localhost:5173/e-plantShopping](http://localhost:5173/e-plantShopping) in your browser.

### Build & Deploy

```bash
# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📸 Screenshots

| Landing Page | Product Catalog | Shopping Cart |
|---|---|---|
| Hero with CTA | Plant cards grid | Cart with controls |

## 📄 License

This project was built to develop practical skills in **React** and **Redux** for pursuing a career in web development.

---

Made with 💚 by [Nguyen Van Gia Binh](https://github.com/Nguyen-Van-Gia-Binh)