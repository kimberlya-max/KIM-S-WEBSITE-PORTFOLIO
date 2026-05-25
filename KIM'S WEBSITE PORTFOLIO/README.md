# Portfolio — Alex Morgan

A clean, single-page portfolio site built with plain HTML, CSS, and JavaScript.
**No frameworks, no build tools.** Just open the folder in VS Code and go.

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← All page content & sections
├── css/
│   └── style.css       ← All styles (design tokens, layout, components)
├── js/
│   └── main.js         ← Animations, form validation, nav highlights
├── assets/             ← Put your photo here (e.g. photo.jpg)
└── README.md
```

---

## 🚀 Getting Started in VS Code

1. **Open the folder** in VS Code:
   ```
   File → Open Folder → select the `portfolio` folder
   ```

2. **Install the Live Server extension** (if you haven't already):
   - Press `Ctrl+Shift+X` (Extensions panel)
   - Search **"Live Server"** by Ritwick Dey → Install

3. **Preview your site**:
   - Right-click `index.html` in the Explorer panel
   - Click **"Open with Live Server"**
   - Your browser will open at `http://127.0.0.1:5500`

> No npm, no build step needed — it just works.

---

## ✏️ Personalising Your Portfolio

### 1. Your name & title
Open `index.html` and search for `Alex Morgan` — replace every instance with your name.
Update the `.cover-title` paragraph with your actual job title.

### 2. Your links
Search for `yourhandle` and `yoursite.netlify.app` — replace with your real GitHub username, LinkedIn slug, and Netlify URL.

### 3. Your photo
- Drop your photo into the `assets/` folder (name it `photo.jpg`)
- In `index.html`, find the avatar section and follow the commented instructions:
  ```html
  <!-- Remove this: -->
  <div class="avatar-initials">AM</div>

  <!-- Uncomment this: -->
  <img src="assets/photo.jpg" alt="Your Name" class="avatar-photo" />
  ```

### 4. Bio / About text
Edit the three `<p>` paragraphs inside `<div class="about-body">` in `index.html`.

### 5. Skills
- **Language bars**: find `.skill-row` elements and adjust the `style="width: XX%"` and percentage text.
- **Tags**: add or remove `<span class="tag">` items inside `.tags-wrap`.

### 6. Work experience
Each `.exp-item` block in `#experience` has: period, company, role, description, and tech badges.
Duplicate or delete blocks as needed.

### 7. Projects
Each `.project-card` in `#projects` has: number, title, description, and links.
Update the `href` values to point to your real GitHub repos and live demos.

### 8. Education & Certifications
Update the `.edu-item` and `.cert-item` blocks in `#education` with your own details.

### 9. Accent color
To change the Electric Blue to any other color, open `css/style.css` and update:
```css
:root {
  --blue:        #1A6BFF;   /* main accent */
  --blue-bright: #3D85FF;   /* hover states */
  --blue-dim:    #0A3EAA;   /* darker variant */
}
```

---

## 📧 Making the Contact Form Work

By default the form shows a browser `alert()`. To send real emails, pick one:

**Option A — Netlify Forms (easiest, free)**
1. Wrap the form fields in `index.html` with `<form data-netlify="true" name="contact">`.
2. Deploy to Netlify — form submissions arrive in your Netlify dashboard automatically.

**Option B — Formspree (no account needed)**
1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. In `js/main.js`, replace the `alert(...)` block with:
   ```js
   const res = await fetch('https://formspree.io/f/YOUR_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ name, email, subject, message }),
   });
   if (res.ok) alert('Message sent!');
   ```

---

## 🌐 Deploying to Netlify

**Drag & Drop (fastest):**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `portfolio/` folder onto the Netlify drop zone.
3. Copy your live URL — share it on LinkedIn and GitHub.

**Git-based deploy (recommended for updates):**
1. Push this folder to a GitHub repo.
2. In Netlify → "Add new site" → "Import an existing project" → connect GitHub.
3. Every `git push` auto-deploys.

---

## 🎨 Color Reference

| Token           | Value     | Used for                    |
|-----------------|-----------|-----------------------------|
| `--black`       | `#080808` | Page background             |
| `--white`       | `#F5F5F0` | Primary text                |
| `--blue`        | `#1A6BFF` | Accent, headings, highlights|
| `--blue-bright` | `#3D85FF` | Hover states                |
| `--gray`        | `#1C1C1E` | Card / section backgrounds  |
| `--gray-text`   | `#8A8A8F` | Secondary / muted text      |

---

Built with ♥ and Electric Blue.
