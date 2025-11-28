# 👾 Gamified Personal Portfolio

![Project Banner](/public/images/og-image.jpg)

> **"Leveling up my coding skills, one pixel at a time."**

A highly interactive, gamified personal portfolio website built with the latest web technologies. It features a unique **Neural Network Graph** navigation, **MDX-based Blog system**, and **RPG-style** UI elements.

Designed to be immersive, fast, and fully responsive.

## 🚀 Live Demo

**Visit the live site:** [https://laurentiusdika.site](https://laurentiusdika.site)

---

## 🌟 Key Features (Quest Log)

### 🎨 Immersive UI/UX
- **Gamified Design:** RPG-style skill bars, level stats, and 3D parallax tilt cards.
- **Neural Network Graph:** Interactive force-directed graph to visualize connections between blog posts (inspired by Obsidian).
- **Dark/Light Mode:** Seamless theme switching with "Magic Swap" CSS variables.
- **Animations:** Smooth page transitions, scroll lasers, and typewriter effects using `Framer Motion`.

### 🛠️ Technical Prowess
- **Next.js 15 (App Router):** Utilizing Server Components for maximum performance.
- **Tailwind CSS v4:** The latest engine for blazing-fast styling.
- **MDX Blog System:** File-system based CMS. No database required. Write blogs in Markdown + React components.
- **SEO Optimized:** Automatic Sitemap generation, Robots.txt, and Open Graph images.

### 🎮 Fun Easter Eggs
- **Konami Code:** Try typing `↑ ↑ ↓ ↓ ← → ← → B A` on your keyboard!
- **Infinite Tech Marquee:** A never-ending loop of technology icons.
- **Interactive Search:** Real-time filtering for blog posts.

---

## 🧰 Tech Stack (Inventory)

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Graph Viz** | [React Force Graph](https://github.com/vasturiano/react-force-graph) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Comments** | [Giscus](https://giscus.app/) (GitHub Discussions) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## ⚡ Getting Started

Clone the project and install dependencies to start your local server.

```bash
# 1. Clone the repository
git clone [https://github.com/USERNAME/REPO-NAME.git](https://github.com/USERNAME/REPO-NAME.git)

# 2. Enter the directory
cd my-gamified-portfolio

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
Bash

.
├── app/                # Next.js App Router (Pages & Layouts)
├── components/         # Reusable UI Components (Navbar, Cards, Graph)
├── content/blog/       # MDX Blog Posts (Your articles go here)
├── data/               # Static Data (Projects list, Skills)
├── lib/                # Utilities (Graph parsing, Blog logic)
├── public/             # Static Assets (Images, Icons)
└── styles/             # Global CSS & Tailwind Config
🔧 Customization Guide
Want to make this portfolio yours? Here is how to edit the content:

Edit Projects: Go to data/projects.ts. Add or remove objects to update the Portfolio section.

Write Blogs: Create a new .mdx file in content/blog/. Use the frontmatter format:

YAML

---
title: "My New Post"
date: "2025-01-01"
excerpt: "Short description..."
tags: ["React", "Life"]
---
Change Skills: Go to components/SkillsSection.tsx to adjust skill levels and categories.

SEO & Metadata: Update app/layout.tsx with your own name and description.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.