# Candace Stewart - Portfolio

A Next.js portfolio website showcasing design work, research, and creative coding projects.

## 🚀 Features

- **Mobile-First Design**: Fully responsive across all device sizes
- **Performance Optimized**: Fast loading with Next.js static generation
- **Security Hardened**: Comprehensive security headers and best practices
- **Error Handling**: Graceful error boundaries for production reliability
- **Accessible**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security Features

### Security Headers
The site includes comprehensive security headers configured in `next.config.js`:

- **Strict-Transport-Security**: Forces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables XSS filtering
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features (camera, microphone, geolocation)

### Security Best Practices Implemented

✅ **No Hardcoded Secrets**: All sensitive data is excluded from the repository  
✅ **Error Boundaries**: Graceful error handling prevents crashes  
✅ **Input Validation**: All user inputs are properly sanitized  
✅ **Secure Links**: External links use `rel="noopener noreferrer"`  
✅ **Content Security**: No inline scripts or unsafe eval  
✅ **Production Optimizations**: Removed development tools and debug information

### .gitignore Coverage

The `.gitignore` file excludes:
- Environment variables (`.env*`)
- Build artifacts (`.next/`, `out/`, `build/`)
- Node modules
- IDE configurations
- OS-specific files
- Upload directories

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first breakpoints (sm, md, lg, xl)
- Touch-friendly interactions (`touch-manipulation`)
- Responsive images with Next.js Image optimization
- Flexible grid layouts that adapt to screen size
- Horizontal scrolling carousels for mobile
- Optimized typography scaling

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure deployment
4. Your site will be live with HTTPS enabled

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

## ✅ Pre-Deployment Checklist

Before deploying to production, verify:

- [x] No hardcoded secrets or API keys in code
- [x] All environment variables are properly configured
- [x] Build completes successfully (`npm run build`)
- [x] No console errors in production build
- [x] All images are optimized and loading correctly
- [x] Mobile responsiveness tested on actual devices
- [x] External links open in new tabs with proper security attributes
- [x] Error boundaries are working correctly
- [x] Security headers are configured
- [x] `.gitignore` excludes sensitive files

## 📝 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout with metadata
│   ├── page.jsx             # Home page
│   └── project/
│       └── [slug]/
│           └── page.jsx     # Dynamic project pages
├── components/
│   ├── ErrorBoundary.jsx    # Error handling component
│   └── PortfolioSite.jsx    # Main portfolio component
├── public/                  # Static assets (images, etc.)
├── next.config.js           # Next.js configuration with security headers
└── package.json             # Dependencies and scripts
```

## 🔍 Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review Next.js updates for breaking changes

### Monitoring
- Monitor error logs in production
- Check analytics for broken links or 404s
- Review performance metrics regularly

## 📄 License

This project is private and proprietary.

## 👤 Author

**Candace Stewart**
- Email: [candace.keenya@gmail.com](mailto:candace.keenya@gmail.com)
- Portfolio: [candace.dev](https://candace.dev)
- Instagram: [@candiikay](https://www.instagram.com/candiikay/)
- LinkedIn: [candaceks](https://www.linkedin.com/in/candaceks)

---

Made with care ❤️

