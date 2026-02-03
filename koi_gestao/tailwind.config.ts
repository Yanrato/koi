import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "primary-contrast": "var(--color-primary-contrast)",
        paper: "var(--color-paper)",
        error: "var(--color-error)",
      },
    },
  },
  plugins: [],
}
;
export default config;