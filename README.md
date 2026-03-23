# ⭐️ Personal Website

My portfolio website built to showcase AI/ML projects and research. Also it contains blog posts, contact info and CV file to download.

## Some cool features that make the website less boring

- **Interactive 3D visuals** - each project page features a unique Three.js point cloud 
- **Smooth page transitions** - Framer Motion animations across all navigation and content
- **Dark mode** - full light/dark theme support 
- **Clean, focused design** - glassmorphism cards, minimal typography, zero clutter

## Project Structure

```
src/
├── app/                        # Next.js app router pages
│   ├── page.tsx                # Home — 3D star + navigation cards
│   ├── blog/                   # Blog listing
│   ├── contact/                # GitHub, LinkedIn, Email links
│   └── projects/               # Project showcase
│       ├── spot-the-artist/    # AI art discovery app
│       ├── protein-llm/        # Masters research — protein embeddings
│       ├── gen-nard/           # Generative backgammon game
│       └── galanthus/          # Blockchain disaster relief platform
├── components/
│   ├── icons/                  # Animated SVG navigation icons
│   ├── pointclouds/            # Three.js 3D point cloud components
│   ├── NavigationCard.tsx      # Glassmorphism nav cards
│   ├── ThemeProvider.tsx       # Dark mode context
│   └── ThemeToggle.tsx         # Light/dark switch
├── lib/                        # Constants and utilities
└── styles/                     # Global CSS + Tailwind config
```

## Tech Stack
+ Framework: Next.js 16 
+ Language: TypeScript 5.9 
+ Styling: Tailwind CSS 3.4 
+ 3D: Three.js 0.182 
+ Deployment: Firebase Hosting 

## Deployment

The site is statically exported and deployed to Firebase Hosting.

## License

ISC
