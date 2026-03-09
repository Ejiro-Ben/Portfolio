# GD Portfolio

A modern, responsive portfolio website for graphic designers built with React, TypeScript, and Vite.

## Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Project Showcase**: Beautiful grid layout for displaying your design work
- **Category Filtering**: Filter portfolio projects by category
- **Contact Form**: Easy way for clients to get in touch
- **Social Links**: Integration with social media profiles
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## Tech Stack

- **React 19**: Latest React with hooks support
- **TypeScript**: Type-safe development
- **Vite 8**: Next-generation frontend build tool
- **CSS3**: Modern CSS with gradients, animations, and responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Building

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # React components (Header, Hero, Portfolio, etc.)
├── styles/           # CSS files for each component
├── data/             # Portfolio projects data
├── types/            # TypeScript type definitions
├── App.tsx           # Main App component
├── App.css           # App styling
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Customization

### Update Portfolio Data

Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    category: 'Category',
    image: 'image-url',
    tags: ['tag1', 'tag2'],
    link: 'project-link'
  },
  // Add more projects...
];
```

### Update Personal Information

Edit `src/components/Contact.tsx` to update:
- Email address
- Phone number
- Location
- Social media links

### Customize Colors

Modify colors in CSS files:
- Primary Gradient: `#667eea` to `#764ba2`
- Accent Color: `#e74c3c`

Edit these values in:
- `src/styles/Header.css`
- `src/styles/Hero.css`
- `src/styles/Portfolio.css`
- `src/styles/Contact.css`

### Add Your Images

Replace placeholder images with your actual portfolio work:
1. Add images to the `public/` directory
2. Update image URLs in `src/data/projects.ts`
3. Update profile image in `src/components/About.tsx`

## Deployment

The `dist/` folder contains the production build, ready to deploy to:
- **Vercel**: Recommended, zero-config deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for static sites
- **AWS Amplify**: Complete hosting solution
- Any static file hosting service

## Components

### Header
Navigation bar with responsive mobile menu

### Hero
Eye-catching landing section with call-to-action button

### Portfolio
Grid layout showcasing your design projects with hover effects

### About
About me section with skills and profile photo

### Contact
Contact form and social media links

### Footer
Copyright and attribution footer

## Responsive Design

The portfolio is designed mobile-first and includes breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the `.github/copilot-instructions.md` file for development guidelines.

---

Built with ❤️ for graphic designers
```
