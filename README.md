# Air Powervision India — Frontend Web Application

Corporate web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started (For Team Members)

### 1. Prerequisites
- **Node.js**: v18.17 or higher (v20+ recommended)
- **Package Manager**: `pnpm` (recommended) or `npm`

To install `pnpm` globally (if not installed):
```bash
npm install -g pnpm
```

---

### 2. Installation & Setup

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd APVIfrontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   # or: npm run dev
   # or on Windows: double click start.bat
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
├── app/                  # Next.js 14 App Router (Pages & API routes)
│   ├── about/            # About page
│   ├── admin/            # Admin dashboard & inquiries management
│   ├── api/              # Backend proxy & fallback API routes
│   ├── careers/          # Careers page
│   ├── contact/          # Contact us & inquiry form
│   ├── projects/         # Projects portfolio
│   ├── solutions/        # Solutions showcase
│   ├── layout.tsx        # Root layout (Navbar, Footer, Fonts)
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── common/           # Shared components (Logo, Hero, Cards, Forms)
│   ├── home/             # Homepage sections
│   ├── layout/           # Navbar & Footer
│   └── projects/         # Projects list & filters
├── data/                 # Content datasets (site content, projects, solutions)
├── lib/                  # Utilities, database handlers & validation
├── public/               # Static assets (images, SVGs)
├── tailwind.config.ts    # Custom color palette & design tokens
└── tsconfig.json         # TypeScript configuration
```

---

## 🛠️ Contribution Workflow

1. Pull the latest updates:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create a new branch for your task:
   ```bash
   git checkout -b feature/task-name
   ```
3. Make your changes and test locally:
   ```bash
   pnpm build
   ```
4. Commit and push your branch:
   ```bash
   git add .
   git commit -m "Add: description of your task"
   git push origin feature/task-name
   ```
5. Open a Pull Request on GitHub for review.
