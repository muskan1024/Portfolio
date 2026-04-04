# Portfolio Website Setup Guide

This guide will help you set up and customize your portfolio website.

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Your website will be available at `http://localhost:5173`

## 📝 Customization Checklist

### 1. Personal Information

**File: `src/utils/constants.js`**

Update the following:

```javascript
export const SITE_INFO = {
  name: 'Your Full Name',  // Change this
  title: 'DevOps Engineer & Full Stack Developer',
  tagline: 'Your personal tagline',
  description: 'Your description',
};

export const CONTACT_INFO = {
  email: 'your.email@example.com',  // Change this
  phone: '+91 XXXXXXXXXX',  // Change this
  location: 'Your City, State, Country',  // Change this
  availability: 'Open to opportunities',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',  // Change this
  linkedin: 'https://linkedin.com/in/yourusername',  // Change this
  twitter: 'https://twitter.com/yourusername',  // Change this
  email: 'mailto:your.email@example.com',  // Change this
  instagram: 'https://instagram.com/yourusername',  // Change this
};

export const RESUME_LINK = '/assets/resume/your-resume.pdf';
```

### 2. Projects

**File: `src/data/projects.js`**

Replace the example projects with your actual projects:

```javascript
{
  id: 1,
  title: "Your Project Name",
  shortDescription: "Brief description",
  description: "Detailed description of your project",
  image: "/assets/images/projects/your-project.jpg",
  techStack: ["React", "Node.js", "etc"],
  category: "Web Development" or "DevOps" or "AI/ML",
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/you/project",
  features: ["Feature 1", "Feature 2"],
  featured: true,  // Set to true for featured projects
  year: 2024
}
```

### 3. Skills

**File: `src/data/skills.js`**

Update your skills and proficiency levels:

```javascript
{ 
  name: "Skill Name", 
  icon: "FaIconName",  // Icon from react-icons
  level: "Beginner" or "Intermediate" or "Advanced", 
  category: "DevOps" or "Frontend" or "Backend" or "AI/ML" or "Tools",
  color: "#HexColor"
}
```

### 4. Experience & Education

**File: `src/data/experience.js`**

Update with your actual experience:

```javascript
{
  id: 1,
  title: "Your Role/Degree",
  organization: "Company/University Name",
  location: "City, Country",
  duration: "Year - Year",
  type: "education" or "work" or "internship" or "learning",
  description: "What you did/learned",
  highlights: ["Achievement 1", "Achievement 2"],
  skills: ["Skill1", "Skill2"],
  icon: "graduation" or "code" or "briefcase" or "rocket",
  color: "bg-primary" or "bg-secondary" etc
}
```

### 5. Add Your Assets

#### Profile Photo
1. Add your professional photo to: `/public/assets/images/profile-photo.jpg`
2. Update Hero.jsx (line ~138) - uncomment the img tag:

```javascript
<img
  src="/assets/images/profile-photo.jpg"
  alt={SITE_INFO.name}
  className="w-full h-full object-cover"
/>
```

#### Project Screenshots
Add project images to: `/public/assets/images/projects/`
- `fashion-collection.jpg`
- `gearup.jpg`
- `blog.jpg`
- etc.

#### Resume PDF
Add your resume to: `/public/assets/resume/your-resume.pdf`

#### Favicon
Replace `/public/favicon.ico` with your own favicon

### 6. Update Meta Tags

**File: `index.html`**

Update SEO meta tags:

```html
<title>Your Name | DevOps Engineer & Full Stack Developer</title>
<meta name="description" content="Your description" />
<meta name="author" content="Your Name" />

<!-- Open Graph -->
<meta property="og:title" content="Your Name | Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="https://yourwebsite.com/" />

<!-- Update social preview image -->
<meta property="og:image" content="/assets/images/og-image.jpg" />
```

## 🎨 Theme Customization

### Change Colors

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: {
    DEFAULT: '#3B82F6',  // Your primary color
    light: '#60A5FA',
    dark: '#2563EB',
  },
  secondary: {
    DEFAULT: '#10B981',  // Your secondary color
    light: '#34D399',
    dark: '#059669',
  },
  accent: {
    DEFAULT: '#8B5CF6',  // Your accent color
    light: '#A78BFA',
    dark: '#7C3AED',
  },
}
```

### Change Fonts

1. Update Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Optional: Backend Setup

If you want to enable the contact form with email notifications:

1. Create a backend server (Node.js + Express)
2. Set up MongoDB for storing messages
3. Configure email service (Nodemailer)
4. Update `.env`:
```
VITE_API_URL=https://your-backend-url.com/api
```

5. Uncomment API calls in `src/components/ui/ContactForm.jsx`

## 📱 Testing

### Test Responsiveness
- Mobile: Chrome DevTools (Ctrl+Shift+M)
- Tablet: iPad view
- Desktop: Full screen

### Test Dark Mode
- Click the moon/sun icon in navbar
- Check all sections in both modes

### Test All Links
- Social media links
- Project live demos
- GitHub repositories
- Resume download
- Contact form

## 🐛 Common Issues

### Issue: npm install fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not loading
**Solution**: 
```bash
npm run build
```

### Issue: Images not showing
**Solution**: Check that image paths start with `/` and images exist in `/public/assets/`

### Issue: Dark mode not working
**Solution**: Clear browser cache and localStorage

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for errors (F12 in browser)
2. Refer to this guide
3. Check the README.md
4. Google the specific error message

## ✅ Final Checklist Before Deployment

- [ ] Updated all personal information
- [ ] Added all your projects
- [ ] Updated skills and experience
- [ ] Added profile photo
- [ ] Added project screenshots
- [ ] Added resume PDF
- [ ] Updated favicon
- [ ] Updated meta tags
- [ ] Tested on mobile/tablet/desktop
- [ ] Tested dark/light mode
- [ ] All links working
- [ ] Contact form tested
- [ ] No console errors
- [ ] Build successful (`npm run build`)

---

🎉 **Congratulations! Your portfolio is ready to deploy!**
