# 🚀 NextJS Landing Page Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.4-38bdf8?style=for-the-badge&logo=tailwind-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A modern, feature-rich Next.js landing page template built with the latest technologies**

[Live Demo](#) · [Documentation](./PROJECT_SUMMARY.md) · [Features](./FEATURES.md) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Components Overview](#-components-overview)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

This is a **professional, production-ready** Next.js landing page template designed for SaaS products, startups, businesses, and personal portfolios. Built with the latest Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS, it provides everything you need to launch a modern web presence quickly.

### Why Choose This Template?

✅ **Modern Tech Stack** - Built with Next.js 15, React 19, and TypeScript  
✅ **10+ Pre-built Sections** - Hero, Features, Pricing, Blog, FAQ, Testimonials & more  
✅ **Fully Responsive** - Mobile-first design that works on all devices  
✅ **Dark/Light Mode** - Built-in theme switching with next-themes  
✅ **SEO Optimized** - Meta tags, semantic HTML, and fast performance  
✅ **Type Safe** - Full TypeScript support for better development experience  
✅ **Easy Customization** - Well-structured code with clear documentation  
✅ **Production Ready** - Tested and ready for deployment

---

## ✨ Key Features

### 🎨 UI Components

- **Hero Section** - Eye-catching banner with CTAs and animated elements
- **Features Grid** - Showcase your product features with icons and descriptions
- **Pricing Tables** - Flexible pricing plans with feature comparisons
- **Testimonials Carousel** - Auto-playing customer testimonials with ratings
- **Blog Preview** - Latest articles with images, categories, and metadata
- **FAQ Accordion** - Smooth expand/collapse functionality
- **Newsletter Form** - Email subscription with validation
- **Stats/Counter** - Animated counters with intersection observer
- **CTA Banners** - Multiple call-to-action sections
- **Partners/Logos** - Showcase integrations and partnerships

### 🔧 Functional Features

- **Authentication Pages** - Sign in, Sign up, Forgot password, Reset password
- **NextAuth Integration** - Ready for social and email authentication
- **Contact Form** - With form validation and toast notifications
- **Blog System** - Markdown-based blog with dynamic routing
- **Dashboard** - Protected dashboard page example
- **Scroll Progress** - Visual indicator of page scroll position
- **Back to Top** - Smooth scroll-to-top button
- **Loading States** - Pre-loader and skeleton components
- **Toast Notifications** - React-hot-toast integration
- **AOS Animations** - Scroll-triggered animations throughout

### 📱 Pages Included

```
✓ Home (/)
✓ About (/about)
✓ Features (/features)
✓ Pricing (/pricing)
✓ Blog (/blog)
✓ Blog Post (/blog/[slug])
✓ Contact (/contact)
✓ Documentation (/documentation)
✓ Dashboard (/dashboard)
✓ Sign In (/signin)
✓ Sign Up (/signup)
✓ Forgot Password (/forgot-password)
✓ Reset Password (/reset-password)
✓ Privacy Policy (/privacy-policy)
✓ Terms (/terms)
✓ 404 Page
```

---

## 🛠 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.2.4 | React framework with App Router |
| **React** | 19.0.0 | UI library |
| **TypeScript** | 5.x | Type safety and better DX |
| **Tailwind CSS** | 4.1.4 | Utility-first CSS framework |

### Key Dependencies

| Package | Purpose |
|---------|---------|
| `next-themes` | Dark/light mode theming |
| `next-auth` | Authentication system |
| `framer-motion` | Advanced animations |
| `react-hot-toast` | Toast notifications |
| `react-slick` | Carousel/slider component |
| `@iconify/react` | Icon library |
| `aos` | Scroll animations |
| `axios` | HTTP client |
| `gray-matter` | Markdown frontmatter parsing |
| `remark` & `remark-html` | Markdown processing |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nextjs-landing-page-template.git
cd nextjs-landing-page-template
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

---
## 📁 Project Structure

```
nextjs-landing-page-template/
├── public/                      # Static assets
│   └── images/                  # Image assets organized by section
│       ├── hero/
│       ├── features/
│       ├── pricing/
│       ├── blog/
│       └── ...
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (site)/             # Main site routes
│   │   │   ├── (auth)/         # Authentication pages
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── dashboard/
│   │   │   ├── documentation/
│   │   │   ├── features/
│   │   │   ├── pricing/
│   │   │   ├── privacy-policy/
│   │   │   └── terms/
│   │   ├── api/                # API routes
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── Home/               # Home page sections
│   │   │   ├── Hero/
│   │   │   ├── Features/
│   │   │   ├── Pricing/
│   │   │   ├── Blog/
│   │   │   ├── Testimonials/
│   │   │   ├── FAQ/
│   │   │   ├── Newsletter/
│   │   │   ├── CTA/
│   │   │   ├── Stats/
│   │   │   ├── Partners/
│   │   │   └── ...
│   │   ├── Layout/             # Layout components
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   ├── Auth/               # Authentication components
│   │   ├── Common/             # Shared components
│   │   ├── Blog/               # Blog components
│   │   └── ...
│   ├── hooks/                  # Custom React hooks
│   │   └── useCounterAnimation.ts
│   ├── types/                  # TypeScript type definitions
│   │   ├── blog.ts
│   │   ├── menu.ts
│   │   ├── plans.ts
│   │   ├── testimonial.ts
│   │   └── ...
│   ├── utils/                  # Utility functions
│   │   ├── markdown.ts
│   │   ├── markdownToHtml.ts
│   │   └── validateEmail.ts
│   └── middleware.ts           # Next.js middleware
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Dependencies and scripts
├── FEATURES.md                 # Feature documentation
├── CHANGELOG.md                # Version history
├── PROJECT_SUMMARY.md          # Detailed project summary
└── README.md                   # This file
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🧩 Components Overview

### Home Page Sections

#### 1. **Hero Section** (`/src/components/Home/Hero`)
- Animated banner with gradient background
- Primary and secondary CTAs
- Decorative SVG elements
- Responsive design with mobile optimization

#### 2. **Features Section** (`/src/components/Home/Features`)
- Grid layout with icon cards
- Hover effects and animations
- Customizable feature data
- Supports unlimited features

#### 3. **Stats/Counter** (`/src/components/Home/Stats`)
- Animated counters using Intersection Observer
- Custom `useCounterAnimation` hook
- Smooth easing animations
- Displays key metrics

#### 4. **Pricing Section** (`/src/components/Home/Pricing`)
- Multiple pricing plans
- Feature comparison
- Highlight popular plans
- Monthly/yearly toggle ready

#### 5. **Testimonials Carousel** (`/src/components/Home/Testimonials`)
- Auto-playing slider (5s interval)
- Navigation arrows and dots
- Star ratings
- Responsive breakpoints

#### 6. **FAQ Accordion** (`/src/components/Home/FAQ`)
- Smooth expand/collapse
- Pre-populated questions
- CTA to contact section

#### 7. **Newsletter** (`/src/components/Home/Newsletter`)
- Email validation
- Toast notifications
- Loading states
- Gradient background

#### 8. **Blog Preview** (`/src/components/Home/Blog`)
- Latest articles grid
- Image hover effects
- Category badges
- Read more links

#### 9. **CTA Banner** (`/src/components/Home/CTA`)
- Eye-catching design
- Multiple action buttons
- Feature highlights
- Decorative elements

#### 10. **Partners/Integrations** (`/src/components/Home/Partners`)
- Logo showcase grid
- Hover scale effects
- Popular payment/platform logos

### Layout Components

#### Header (`/src/components/Layout/Header`)
- Sticky navigation
- Mobile responsive menu
- Dark/light theme toggle
- Logo with routing

#### Footer (`/src/components/Layout/Footer`)
- Multi-column layout
- Social media links
- Quick links
- Newsletter signup

### Common Components

- **ScrollProgress** - Visual scroll indicator
- **BackToTop** - Smooth scroll button
- **Breadcrumb** - Page navigation
- **Loader/PreLoader** - Loading states
- **ScrollUp** - Scroll to top functionality

### Authentication Components

- **SignIn** - Login form with validation
- **SignUp** - Registration form
- **ForgotPassword** - Password recovery
- **ResetPassword** - New password form
- **SocialSignIn/SignUp** - OAuth buttons

---

## 🎨 Customization

### Branding

#### 1. **Update Logo**
Replace logo files in `/public/images/logo/`:
- `logo.svg` - Main logo
- `logo-white.svg` - White version for dark mode
- `icon.svg` - Favicon icon

#### 2. **Update Colors**
Modify Tailwind configuration in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // Add your brand colors
}
```

#### 3. **Update Fonts**
Change fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const font = YourFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
```

### Content

#### Update Navigation Menu
Edit `src/components/Layout/Header/Navigation/menuData.tsx`:

```typescript
export const menuData = [
  { title: "Your Page", path: "/your-path" },
  // Add your menu items
]
```

#### Update Home Page Sections
Each section has its own component in `/src/components/Home/`. Simply edit the data arrays in each component to customize content.

#### Add Blog Posts
Create markdown files in a `content/blog/` directory (you'll need to set this up) or fetch from a CMS.

### Styling

All components use Tailwind CSS classes. To customize:
1. Modify the utility classes directly in components
2. Update the global styles in `src/app/globals.css`
3. Extend Tailwind configuration for custom utilities

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`

### Deploy to Other Platforms

This template can be deployed to any platform that supports Next.js:
- **AWS Amplify**
- **Azure Static Web Apps**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

### Environment Variables

Create a `.env.local` file for environment variables:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (if using)
DATABASE_URL=your-database-url

# Email (if using)
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@example.com

# OAuth Providers (if using)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works on all devices
- [ ] Forms validate correctly
- [ ] Dark/light mode toggles properly
- [ ] Animations trigger on scroll
- [ ] Images load and display correctly
- [ ] Links redirect to correct pages
- [ ] Mobile menu functions properly

### Performance

Check performance with:
```bash
npm run build
npm start
```

Then use:
- **Lighthouse** - Built into Chrome DevTools
- **WebPageTest** - [webpagetest.org](https://www.webpagetest.org/)
- **PageSpeed Insights** - [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE.txt](LICENSE.txt) file for details.

### What This Means

✅ Commercial use allowed  
✅ Modification allowed  
✅ Distribution allowed  
✅ Private use allowed  
❌ Liability limitation  
❌ Warranty limitation

---

## 💬 Support

### Documentation

- 📖 [Project Summary](PROJECT_SUMMARY.md) - Complete project overview
- 🎨 [Features Documentation](FEATURES.md) - Detailed feature list
- 📋 [Changelog](CHANGELOG.md) - Version history and updates
- 🔧 [Build Fixes](BUILD_FIXES.md) - Common issues and solutions

### Get Help

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/nextjs-landing-page-template/issues)
- 💡 **Feature Requests**: [Open an issue](https://github.com/yourusername/nextjs-landing-page-template/issues)
- 💬 **Questions**: [Start a discussion](https://github.com/yourusername/nextjs-landing-page-template/discussions)

### Community

- ⭐ **Star this repo** if you find it helpful
- 🔀 **Fork** to create your own version
- 📢 **Share** with fellow developers

---

## 🙏 Acknowledgments

Built with these amazing technologies:
- [Next.js](https://nextjs.org/) - The React Framework
- [React](https://react.dev/) - JavaScript library for user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Iconify](https://iconify.design/) - Icon framework
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library

---

## 📊 Project Statistics

- **Total Components**: 50+
- **Total Pages**: 15+
- **Total Features**: 10+
- **Lines of Code**: ~5,000+
- **Build Size**: ~128 KB (First Load JS)
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

---

## 🗺️ Roadmap

### Planned Features

- [ ] Multi-language support (i18n)
- [ ] CMS integration (Contentful/Sanity)
- [ ] Advanced blog features (tags, search, pagination)
- [ ] E-commerce integration
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] A/B testing setup
- [ ] More pre-built page templates
- [ ] Component library (Storybook)

---

## 📸 Screenshots

### 🏠 Hero Section
The stunning landing page with animated hero banner, featuring eye-catching CTAs and modern design elements.

![Hero Section](./screenshots/Hero.png)

### 💰 Pricing Plans
Flexible pricing tables with feature comparisons, perfect for SaaS products and subscription services.

![Pricing Section](./screenshots/Pricing.png)

### ✨ Full Page Overview
Complete showcase of all sections including features, testimonials, FAQ, and more in a seamless layout.

![Full Page Preview](./screenshots/Screenshot1.png)

---

<div align="center">

**Built with ❤️ using Next.js, React, and TypeScript**

Give this project a ⭐️ if it helped you!

[⬆ Back to Top](#-nextjs-landing-page-template)

</div>
