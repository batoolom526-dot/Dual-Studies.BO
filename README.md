# Al-Quds University — Dual Studies College Internationalization Portal

A modern, responsive web portal showcasing the international dual-study program at Al-Quds University, featuring partner universities, academic programs, and student applications.

## 🎯 Features

- **Interactive Partner Map** — Leaflet-based map showing international partner locations
- **Multi-Language Support** — English, German (Deutsch), and Arabic translations
- **Programs Catalog** — Browse dual-study programs with requirements and details
- **Application Form** — Submit program applications with document uploads
- **Responsive Design** — Fully mobile-friendly across all devices
- **Accessible UI** — WCAG-compliant keyboard navigation and semantic HTML

## 📁 Project Structure

```text
.
├── index.html              # Main landing page
├── programs.html           # Programs listing & application page
├── partners.html           # Partners directory page
├── styles.css              # Global styling
├── partners.css            # Partners page styles
├── script.js               # Main JavaScript (index, shared logic)
├── programs.js             # Programs page logic
├── partners.js             # Partners page logic
├── logo.svg                # University logo
├── assets/                 # Partner logos and images
│   └── partners/
│       ├── giz.svg
│       ├── tu_berlin.svg
│       └── aub.svg
└── README.md               # This file
```

## 🚀 Getting Started

### Local Preview

1. **Start a local server** (Python 3.7+):

   ```bash
   cd "path/to/Dual Studies"
   python -m http.server 8000
   ```

2. **Open in browser**:

   ```text
   http://localhost:8000
   ```

### View Specific Pages

- **Home**: [http://localhost:8000/index.html](http://localhost:8000/index.html)
- **Programs**: [http://localhost:8000/programs.html](http://localhost:8000/programs.html)
- **Partners**: [http://localhost:8000/partners.html](http://localhost:8000/partners.html)

## 🌐 GitHub Pages Deployment

This project is ready for GitHub Pages hosting:

1. **Create a GitHub repository** (if you haven't already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dual Studies portal"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/dual-studies.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository **Settings** → **Pages**
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Root folder: `/` (root)
   - Click **Save**

3. **Access your live site**:

   ```text
   https://YOUR-USERNAME.github.io/dual-studies
   ```

> **Note**: Make sure your repository is **public** for GitHub Pages to work on free accounts. If private, you'll need GitHub Pro or use GitHub Actions.

## 📝 Configuration

### Partner Data

Partner information is stored in `partners.js`:

```javascript
const partners = [
  {
    id: 1,
    name: 'Partner Name',
    location: 'City, Country',
    tags: ['Tag1', 'Tag2'],
    since: 'Since YYYY',
    logo: 'assets/partners/logo.svg',
    website: 'https://example.com',
    description: 'Partner description...'
  }
];
```

### Program Data

Program details are in `programs.js`:

```javascript
const programs = [
  {
    id: 1,
    name: 'Program Name',
    faculty: 'Faculty',
    duration: 'Duration',
    description: '...',
    requirements: { ... }
  }
];
```

## 🌍 Language Support

The portal supports three languages. Toggle via buttons in the header:

- **EN** — English
- **DE** — German (Deutsch)
- **العربية** — Arabic

Language data is stored in `script.js` in translation objects.

## 📧 Contact

- **Email**: [ds@ds.alquds.edu](mailto:ds@ds.alquds.edu)
- **Facebook**: [facebook.com/dualstudies.aqu](https://www.facebook.com/dualstudies.aqu)
- **Instagram**: [@dualstudies_aqu](https://www.instagram.com/dualstudies_aqu)

## 📄 License

© 2024 Al-Quds University - Dual Studies College. All rights reserved.

---

**Last Updated**: January 2026
