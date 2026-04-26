# Implementation Plan: Data Analyst Portfolio Website

Create a modern, dark-themed portfolio website for Sorn Tayakkanonta, optimized for GitHub Pages.

## Objective
Build a professional, single-page portfolio that showcases data analysis projects with a "JetBrains Mono" aesthetic and mint green accents.

## Key Files & Context
- `index.html`: Main structure (Hero, Projects, Contact).
- `styles.css`: Dark theme styling, typography, and responsive layout.
- `script.js`: Smooth scrolling and scroll-reveal animations.
- `assets/`: Directory for project images and icons.

## Implementation Steps

### 1. Project Initialization
- Create root directory structure.
- Initialize `index.html`, `styles.css`, and `script.js`.

### 2. HTML Structure
- **Navigation:** Fixed header with links to Home, Projects, and Contact.
- **Hero Section:**
    - Heading: "Sorn Tayakkanonta"
    - Subheading: "Data Analyst" (using the mint green accent).
- **Projects Section:**
    - Container for 3 project cards.
    - Each card: Image placeholder, Title, Description, and Tech Stack tags.
- **Contact Section:**
    - Professional links (Email, LinkedIn, GitHub).
    - Footer with copyright.

### 3. Styling (CSS)
- **Typography:** Import "JetBrains Mono" from Google Fonts.
- **Color Palette:**
    - Background: `#0b0e14` (Deep Dark)
    - Surface/Card: `#161b22`
    - Text: `#c9d1d9`
    - Accent: `#00ffa3` (Mint Green/Emerald)
- **Layout:** Flexbox/Grid for responsiveness.
- **Effects:** Hover states for cards and links using the mint green accent.

### 4. Interactivity (JS)
- Implement smooth scrolling for navigation links.
- Add a simple "Intersection Observer" to fade in sections as the user scrolls.

### 5. Deployment Preparation
- Create a `README.md` with project details.
- Prepare Git instructions for pushing to GitHub.

## Verification & Testing
- **Cross-browser check:** Ensure font and colors render correctly.
- **Responsiveness:** Test on mobile and desktop views.
- **Link check:** Verify all navigation and external links work.
