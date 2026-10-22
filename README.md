# Nanda Krishna C — Organic / Hand-Drawn Portfolio & CV

A personal portfolio website and ATS-friendly CV pipeline designed with an **organic, sketchbook journal aesthetic**. Inspired by botanical field notes, the website features soft sage greens, wobbly irregular border-radius blobs, hard offset shadows, inline SVG doodles (leaves, sprouts, vines, wobbly underlines), and gentle micro-animations.

---

## 🌿 Design System & Aesthetics

- **Color Palette**:
  - Background: `#e9f3e6` (soft sage)
  - Blob Green: `#bfdcb5`
  - Shadow Green: `#9bc08f`
  - Deep Forest Text: `#2f4a2a` (WCAG AAA compliant contrast on white & sage)
  - Card Background: `#ffffff`
  - Warm Accents: Soft Peach (`#f6c9a6`) and Butter Yellow (`#f4e3a1`)
- **Shapes & Blobs**:
  - Base blob: `.blob { width: 170px; height: 150px; background: #bfdcb5; border-radius: 58% 42% 63% 37% / 45% 56% 44% 55%; }`
  - Base card: `.card { background: #fff; border-radius: 30px 24px 34px 22px; box-shadow: 0 6px 0 #9bc08f; color: #2f4a2a; }`
  - Varied 8-value irregular corner radii across cards, tags, and buttons to look hand-cut.
- **Shadows**:
  - Hard, offset shadows with no blur (`0 6px 0 #9bc08f`).
  - On hover, cards lift smoothly to `0 9px 0 #9bc08f` with `translateY(-3px)`.
- **Typography**:
  - Headings: **Fraunces** (soft, organic, serif font from Google Fonts)
  - Body: **Nunito** (clean, readable rounded sans at 16–18px, 1.65 line-height)
  - Accents & Annotations: **Patrick Hand** (warm handwritten font for tags and notes)
- **Motion & Accessibility**:
  - Blobs slowly morph border-radius and float.
  - Buttons wiggle gently on hover.
  - Full support for `prefers-reduced-motion` (turns off morphing and floating).
  - Thick, visible keyboard focus rings (`outline: 3px solid #2f4a2a`).
  - Decorative SVGs marked with `aria-hidden="true"`.

---

## 📂 Site Structure & Sections

1. **Hero**: Soft green backdrop, large morphing blobs, `h1` name, role badge, handwritten tagline, "View Work" CTA, and "Download CV" action.
2. **About**: Hand-cut card with blob-masked botanical portrait illustration, bio, and quick-fact stickers.
3. **Selected Work**: Irregular project cards with hover lifts, tags, summaries, and an interactive **ProjectModal** write-up (what it is, problem & solution, learnings, tools).
4. **The Skill Garden**: Plant metaphor grouping skills into leaves and branches across Core Web Technologies, Version Control & Tooling, and Development Practices.
5. **Education**: Gentle vertical vine timeline featuring the **Vellore Institute of Technology (VIT)** card (2026–2030 Expected).
6. **Contact**: Hand-drawn invitation card, copyable email link, and GitHub/LinkedIn blob buttons.
7. **Footer**: Organic wobbly divider, sprout back-to-top button, and copyright notice.
8. **ATS CV Page (`/cv`)**: Semantic, single-column web preview with dedicated print stylesheet (`@media print` dark green on white, 1-page fit).

---

## 🛠️ Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Organic Design System (`src/styles/organic.css` & `src/styles/print-cv.css`)
- **Animations**: Framer Motion & CSS `@keyframes`
- **CV Engine**: `pdf-lib` (vector 1-page PDF generation) + `docx` (Word document generation)
- **Icons**: Custom inline hand-drawn SVGs + Lucide React

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

---

## 📝 Updating Content & Regenerating the CV

All personal information, education, skills, and projects live in a **single typed file**:
👉 `src/data/content.ts`

### How to Edit:
1. Open `src/data/content.ts`.
2. Update your bio, email, social links, or project details.
3. Run the CV generator:
```bash
npm run generate:cv
```
This updates both:
- `public/Nanda-Krishna-C-CV.pdf`
- `public/Nanda-Krishna-C-CV.docx`

---

## 📦 Building for Production

To create an optimized production bundle:
```bash
npm run build
```
The build script automatically runs `npm run generate:cv`, verifies TypeScript types, and compiles Vite output into `dist/`.

---

## 🌐 Deploying to Vercel or Netlify

This project is a static React single-page app and is ready to deploy anywhere:

### Vercel:
1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Netlify:
1. Drag and drop the `dist` folder into Netlify, or link your GitHub repo.
2. Build Command: `npm run build`
3. Publish directory: `dist`
