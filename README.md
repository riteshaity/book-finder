# 📚 Book Finder

A responsive **React + Vite** application that allows users to search for books using the [Open Library API](https://openlibrary.org/developers/api). Users can view search results in a grid, click on a book to see its details, and navigate back to the search results.

---

## 🌟 Features

- Search books by title using the Open Library API
- Responsive grid layout for displaying book covers
- Click on a book to view detailed information:
  - Book title
  - Cover image
  - Author(s)
  - First published year
  - Description and subjects (if available)
- Back button to return to search results
- Responsive design for mobile and desktop
- Hover effects on book cards

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **Vite** – Build tool
- **Tailwind CSS** – Styling
- **Open Library API** – Public API for book data
- **React Router** – Routing between home and book detail pages

---

## 📂 Folder Structure

book-finder/
│
├─ public/
│ └─ index.html
│
├─ src/
│ ├─ components/
│ │ └─ BookCard.jsx
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ └─ BookDetail.jsx
│ ├─ App.jsx
│ └─ main.jsx
│
├─ package.json
├─ vite.config.js
└─ tailwind.config.js




---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/riteshaity/book-finder.git
cd book-finder

npm install


npm run dev

```
## 📦 Deployment

You can deploy the app on free hosting services like Vercel, CodeSandbox, or StackBlitz:

CodeSandbox: https://codesandbox.io/s/github/riteshaity/book-finder

Vercel: Connect your GitHub repo and deploy directly.
