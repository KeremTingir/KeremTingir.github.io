# Personal Portfolio Website

A modern, minimalistic portfolio website with a dark theme that mimics the structure of a traditional CV. Built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- **Dark Theme**: Professional dark color scheme with blue accents
- **Modern Typography**: Clean Inter font family for excellent readability
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Subtle animations and transitions for enhanced UX

### 📱 Sections
1. **Header**: Name, job title, and tagline with typing effect
2. **Summary**: Professional introduction paragraph
3. **Skills**: Categorized skills with interactive tags
4. **Experience & Education**: Timeline layout with hover effects
5. **Projects**: Clickable project cards with detailed modal views
6. **Contact**: Contact information and functional contact form

### ⚡ Interactive Features
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Project Modals**: Detailed project information in modal windows
- **Contact Form**: Functional contact form with validation
- **Scroll to Top**: Animated scroll-to-top button
- **Active Navigation**: Highlighted current section in navigation
- **Hover Effects**: Interactive elements with smooth hover animations

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Customization Guide

### Personal Information
Update the following in `index.html`:

```html
<!-- Header Section -->
<h1 class="name">Your Name</h1>
<h2 class="title">Computer Engineer</h2>
<p class="tagline">Building innovative solutions through code and creativity</p>

<!-- Contact Information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a>
```

### Skills Section
Modify the skills in `index.html`:

```html
<div class="skill-category">
    <h3>Programming Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">Python</span>
        <!-- Add your skills here -->
    </div>
</div>
```

### Experience & Education
Update the timeline items in `index.html`:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="company">Company Name</p>
        <p class="period">2022 - Present</p>
        <p>Your job description and achievements.</p>
    </div>
</div>
```

### Projects
1. **Update project cards** in `index.html`
2. **Modify project data** in `script.js`:

```javascript
const projectData = {
    project1: {
        title: "Your Project Title",
        summary: "Detailed project description...",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "path/to/your/image.jpg",
        github: "https://github.com/yourusername/project",
        demo: "https://your-demo-link.com"
    }
    // Add more projects...
};
```

### Styling Customization
Modify colors and styling in `styles.css`:

```css
/* Primary colors */
:root {
    --primary-color: #64b5f6;
    --secondary-color: #2196f3;
    --background-dark: #0a0a0a;
    --background-light: #1a1a1a;
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
}
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Features

- **Optimized Animations**: Hardware-accelerated CSS animations
- **Lazy Loading**: Images load efficiently
- **Smooth Scrolling**: Native smooth scroll behavior
- **Responsive Images**: Optimized for different screen sizes

## Getting Started

1. **Clone or download** the project files
2. **Customize** the content in `index.html`
3. **Update** project data in `script.js`
4. **Modify** styling in `styles.css` if needed
5. **Open** `index.html` in a web browser

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload the project files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

## Features in Detail

### Project Modal System
- Click any project card to view detailed information
- Modal includes project image, description, technologies, and links
- Close with X button, clicking outside, or pressing Escape

### Contact Form
- Form validation for required fields
- Email format validation
- Success/error notifications
- Responsive design

### Animations
- Fade-in animations for sections
- Hover effects on interactive elements
- Smooth transitions throughout
- Typing effect for tagline

### Navigation
- Sticky navigation bar
- Active section highlighting
- Smooth scroll to sections
- Mobile-responsive menu

## Customization Tips

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation if needed

### Changing Color Scheme
1. Modify CSS custom properties in `styles.css`
2. Update gradient colors throughout
3. Test contrast ratios for accessibility

### Adding More Projects
1. Add project card HTML in `index.html`
2. Add project data in `script.js`
3. Update modal content structure if needed

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using HTML, CSS, and JavaScript** 