# Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer & Cybersecurity Enthusiast.

## 🌐 Live Demo

[View Live Portfolio](https://bhavish4.github.io/portfolio-website/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices (desktop, tablet, mobile)
- **Dark Mode Toggle**: User-friendly dark/light theme switcher with persistent preference
- **Interactive Animations**: Smooth animations and transitions using Anime.js
- **Particle Background**: Dynamic particle.js background for visual appeal
- **SEO Optimized**: Comprehensive SEO with structured data (JSON-LD), Open Graph, and Twitter Card tags
- **Performance Optimized**: Fast loading with preload, preconnect, and lazy loading
- **Contact Form**: Functional contact form integrated with Web3Forms
- **Accessibility**: ARIA labels, skip links, and semantic HTML for better accessibility
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, and other security meta tags

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
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
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

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Personal background and interests
3. **Education**: Academic qualifications and specializations
4. **Certifications**: Professional certifications and achievements
5. **Experience**: Work experience and internships
6. **Projects**: Showcase of personal projects with links
7. **Skills**: Technical skills organized by category
   - Frontend (HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS)
   - Backend (Node.js, Express.js, Python, Django, PHP)
   - Database (MySQL, Firebase)
   - Mobile Development (Flutter, Kotlin)
   - Tools & Others (Git, GitHub, Figma, Jest, Ethical Hacking)
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

## 📊 SEO Features

- Structured Data (JSON-LD) for Person and WebSite
- Open Graph tags for social media sharing
- Twitter Card tags
- Semantic HTML5 elements
- Descriptive meta descriptions
- Canonical URL
- Alt text for all images

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

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement blog functionality
- [ ] Add more interactive animations
- [ ] Add testimonials section
- [ ] Add GitHub contribution graph
- [ ] Add resume download feature
- [ ] Add project filtering by technology
- [ ] Add analytics integration

---

⭐ If you like this project, give it a star on GitHub!

