# Todo App

## About the project

**Todo App** is a fast, lightweight, and modern web application designed to help users organize their daily tasks through interactive cards. The application provides a clean and intuitive interface, making day-to-day task management simple and effective.

All user data is stored locally in the browser, ensuring that tasks are preserved across sessions without the need for an external database or backend account.

The project is built using a cutting-edge frontend stack, featuring **React 19**, **Vite 8**, and **Tailwind CSS v4**. It also incorporates the new **React Compiler** for optimized performance and automated re-rendering control.

---

## Features

- **Task Management**  
  Create, organize, and manage daily tasks using a visual card-based layout.

- **Local Persistence**  
  Automatic state saving in the browser's `localStorage` so data is never lost on refresh.

- **Modern Architecture**  
  Powered by Vite 8 and TypeScript for a type-safe, ultra-fast development experience.

- **Tailwind CSS v4**  
  Styled with the latest utility-first CSS framework configuration and features.

- **React Compiler Enabled**  
  Uses `babel-plugin-react-compiler` to automatically optimize component rendering.

- **Client-Side Routing**  
  Ready for view navigation using React Router v8.

---

## Built with

- **React 19** - UI Library
- **Vite 8** - Frontend Tooling & Bundler
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Styling & Design
- **React Router v8** - Routing
- **use-local-storage-state** - LocalStorage Hook
- **ESLint** - Code Linting

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18+ recommended)
* npm, yarn, or pnpm

### Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```

2. Navigate to the project directory:
   ```bash
   cd todo
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Scripts Available

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

<img width="974" height="769" alt="image" src="https://github.com/user-attachments/assets/9f3138e1-ca8c-4433-9e4e-64ac2539ebfe" />




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
