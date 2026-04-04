# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, showcasing DevOps and Full Stack development skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark/light mode
- **Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Framer Motion powered animations
- **Interactive Sections**:
  - Hero with typing animation
  - About with animated stats counter
  - Skills with category filtering
  - Projects showcase with filtering
  - Experience timeline
  - Contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

### Update Personal Information

1. **src/utils/constants.js**
   - Update `SITE_INFO` with your name and details
   - Update `SOCIAL_LINKS` with your social media URLs
   - Update `CONTACT_INFO` with your contact details

2. **src/data/projects.js**
   - Replace with your actual projects
   - Update images, links, and descriptions

3. **src/data/skills.js**
   - Customize your skills and proficiency levels

4. **src/data/experience.js**
   - Update with your education and work experience

### Add Your Assets

1. **Profile Photo**: Add to `/public/assets/images/profile-photo.jpg`
2. **Project Screenshots**: Add to `/public/assets/images/projects/`
3. **Resume PDF**: Add to `/public/assets/resume/your-resume.pdf`
4. **Favicon**: Replace `/public/favicon.ico`

### Update Meta Tags

Edit `index.html` to update:
- Page title
- Meta descriptions
- Open Graph tags for social sharing

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#10B981',  // Green
  accent: '#8B5CF6',     // Purple
}
```

### Fonts

Update Google Fonts link in `index.html` and font family in `tailwind.config.js`.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended for Frontend)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

## 📝 Backend Setup (Optional)

If you want to enable the contact form backend:

1. Set up a Node.js server with Express
2. Configure MongoDB for storing messages
3. Update `VITE_API_URL` in environment variables
4. Uncomment API calls in `ContactForm.jsx`

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
"# Portfolio" 
