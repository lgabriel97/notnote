# NotNote 📋

**NotNote** is a web and Android app that lets you register your projects and track the tasks needed to accomplish them — keeping everything organized in one place.

🌐 **Live Demo:** [https://unrivaled-otter-bd0fbd.netlify.app/](https://unrivaled-otter-bd0fbd.netlify.app/)

---

## Screenshots

<!-- Add screenshots here -->

| Dashboard                                                          | Project View                                                          | Workflow                                                          |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Daskboard](<public/Captura de pantalla_2026-02-18_09-47-00.png>) | ![Project View](<public/Captura de pantalla_2026-02-18_09-47-47.png>) | ![Workflow](<public/Captura de pantalla_2026-02-18_09-48-25.png>) |

---

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Capacitor](https://capacitorjs.com/) — Android builds
- [Netlify](https://netlify.com/) — Web hosting

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- Android Studio (for Android builds)

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for web

```bash
npm run build
```

---

## Android Build (Capacitor)

### 1. Build the web app

```bash
npm run build
```

### 2. Sync with Capacitor

```bash
npx cap sync android
```

### 3. Open in Android Studio

```bash
npx cap open android
```

Then in Android Studio, click **Run** (▶) to launch on an emulator or connected device.

### One-liner (build + sync)

```bash
npm run build && npx cap sync android
```

---

## Project Structure

```
src/
├── modules
│   ├── common
│   │   ├── components
│   │   └── icons
│   └── projects
│       ├── components
│       ├── interfaces
│       ├── layouts
│       ├── store
│       └── views
└── router
```

---

## Deployment

The web version is automatically deployed to Netlify on every push to `main`.

---

## License

GPL v3
