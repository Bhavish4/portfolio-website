# Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer & Cybersecurity Enthusiast with enhanced interactive features and smooth animations.

## 🌐 Live Demo

[View Live Portfolio](https://bhavish4.github.io/portfolio-website/)

## ✨ Features

### Core Features
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices (desktop, tablet, mobile)
- **Dark Mode Toggle**: User-friendly dark/light theme switcher with persistent preference storage
- **Interactive Animations**: Smooth animations and transitions using Anime.js
- **Particle Background**: Dynamic particle.js background for visual appeal
- **SEO Optimized**: Comprehensive SEO with structured data (JSON-LD), Open Graph, and Twitter Card tags
- **Performance Optimized**: Fast loading with preload, preconnect, and lazy loading
- **Contact Form**: Functional contact form integrated with Web3Forms
- **Accessibility**: ARIA labels, skip links, and semantic HTML for better accessibility
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, and other security meta tags

### Enhanced Features
- **Typing Animation**: Dynamic hero section text that cycles through multiple professional titles
- **Active Navigation**: Automatically highlights the current section as you scroll
- **Skill Proficiency Bars**: Animated progress bars showing expertise levels for each skill
- **Keyboard Shortcuts**: Quick navigation with keyboard shortcuts ('t' for theme toggle, Home/End for scrolling)
- **Smooth Scrolling**: Enhanced scroll-to-top functionality with animations

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, and grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Anime.js**: Animation library for smooth transitions
- **Particles.js**: Interactive particle background

### Design & Icons
- **Font Awesome**: Icon library
- **Google Fonts (Inter)**: Typography
- **Icons8**: Skill icons

### Features & Tools
- **Web3Forms**: Contact form backend
- **GitHub Pages**: Hosting platform

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # All CSS styles with theme support
├── script.js           # JavaScript functionality and animations
├── particles-config.json # Particles.js configuration
│
├── portfolio.png       # Portfolio project image
├── student-management.jpg # Student Management System image
│
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

No prerequisites needed! This is a static website that runs directly in a browser.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhavish4/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click index.html > Open with Live Server
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` (or the port your server uses)

## 📋 Sections

1. **Hero Section**: Introduction with animated typing effect cycling through:
   - Full Stack Developer
   - Cybersecurity Enthusiast
   - Problem Solver
   - BCA Student
   - Web Developer

2. **About Me**: Personal background and interests

3. **Education**: Academic qualifications and specializations
   - Ajeenkya DY Patil University (BCA)
   - Kendriya Vidyalaya NAD Karanja (Higher Secondary)

4. **Certifications**: Professional certifications including:
   - Power BI
   - Database Systems
   - Cybersecurity
   - Ethical Hacking
   - Python
   - SQL

5. **Experience**: Work experience and internships
   - Web Development Intern at Unified Mentor
   - Treasurer at National Service Scheme

6. **Projects**: Showcase of personal projects with GitHub links
   - Personal Portfolio Website
   - Student Management System

7. **Skills**: Technical skills organized by category with proficiency indicators:
   - **Frontend**: HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS
   - **Backend**: Node.js, Express.js, Python, Django, PHP
   - **Database**: MySQL, Firebase, MongoDB
   - **Mobile Development**: Flutter, Kotlin
   - **Tools & Others**: Git, GitHub, Figma, Jest, Ethical Hacking

8. **Contact**: Contact form and social media links

## 🎨 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary-color: #3b82f6;
    /* ... */
}
```

### Updating Content
- Edit `index.html` to update personal information, projects, and experience
- Modify `script.js` for custom functionality
- Adjust `styles.css` for styling changes

### Contact Form
Update the Web3Forms access key in `index.html`:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

### Typing Animation
Customize the phrases in `script.js`:
```javascript
const phrases = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
];
```

### Skill Proficiency Levels
Update proficiency percentages in `index.html`:
```html
<div class="skill-card" data-proficiency="90">
    <!-- skill content -->
</div>
```

## 🔒 Security Features

- **X-Content-Type-Options**: Prevents MIME-type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables XSS filtering
- **Referrer Policy**: Controls referrer information
- **Permissions Policy**: Restricts geolocation, microphone, camera
- **Content Security Policy**: Ready for implementation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Lazy Loading**: Images load only when needed
- **Preload**: Critical resources preloaded
- **Preconnect**: External domains preconnected
- **Optimized Images**: Proper sizing and format
- **Minimal Dependencies**: Lightweight and fast
- **Throttled Scroll Handlers**: Optimized performance with requestAnimationFrame

## 📊 SEO Features

- Structured Data (JSON-LD) for Person and WebSite
- Open Graph tags for social media sharing
- Twitter Card tags
- Semantic HTML5 elements
- Descriptive meta descriptions
- Canonical URL
- Alt text for all images

## ⌨️ Keyboard Shortcuts

- **t**: Toggle dark/light theme
- **Home**: Scroll to top
- **End**: Scroll to bottom

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Bhavish4/portfolio-website/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ponugumatla Bhavish**

- Portfolio: [bhavish4.github.io/portfolio-website](https://bhavish4.github.io/portfolio-website/)
- GitHub: [@Bhavish4](https://github.com/Bhavish4)
- LinkedIn: [ponugumatla-bhavish](https://linkedin.com/in/ponugumatla-bhavish)
- Email: bunnylucky0422@gmail.com

## 🙏 Acknowledgments

- [Anime.js](https://animejs.com/) - Animation library
- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle background
- [Font Awesome](https://fontawesome.com/) - Icons
- [Icons8](https://icons8.com/) - Skill icons
- [Web3Forms](https://web3forms.com/) - Contact form service

## 📈 Recent Updates

- ✅ Added typing animation to hero section
- ✅ Implemented active navigation highlighting
- ✅ Added skill proficiency bars with animations
- ✅ Enhanced keyboard navigation
- ✅ Improved form validation
- ✅ Optimized scroll performance
- ✅ Removed unused features for cleaner UI

---

⭐ If you like this project, give it a star on GitHub!
