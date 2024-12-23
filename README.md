# Currency Converter App

A modern React application that converts currencies based on user preferences. Built with React + TypeScript + Vite, utilizing React hooks for state management and side effects.

## Live Demo

🚀 [Try the Currency Converter App](https://currency-converter-lovat-chi.vercel.app/)

![Currency Converter Screenshot](/src/assets/Currency-Converter.png)

## Features

- Converts currencies based on user input
- Supports multiple currencies (USD, EUR, JPY, CNY, etc.)
- Easy swap between base and target currencies
- Modern UI with Tailwind CSS and Shadcn UI

## Technical Implementation

### How It Works

The app follows a modular architecture with the following key components:

1. **Currency Converter Component**: The main component that orchestrates the conversion logic and UI
2. **Currency Input Component**: A reusable component for currency input fields
3. **Custom Hook**: `useCurrencyInfo` for fetching and caching exchange rates

The conversion flow:

1. User selects currencies and enters an amount
2. The app fetches latest exchange rates from an API
3. Conversion is performed in real-time as user types
4. Results are displayed with proper formatting

### React Hooks Usage

The app leverages several React hooks for efficient state management and side effects:

- **useState**:

  - Manages form input values
  - Tracks selected currencies
  - Controls loading states

- **useEffect**:

  - Fetches currency exchange rates when currencies change
  - Updates converted amounts when input values change
  - Handles cleanup of API calls

- **Custom Hook (useCurrencyInfo)**:
  - Encapsulates currency data fetching logic
  - Manages API call states (loading, error, success)
  - Implements caching to minimize API calls

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI Components
- Lucide Icons

## Original Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```
