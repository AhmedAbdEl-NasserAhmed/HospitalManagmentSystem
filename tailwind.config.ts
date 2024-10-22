import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        textMuted: "#808B9A",
        textDark: "#202326",
        secondary: "#F8F9FC",
        borderLight: "#DCE0E5",
        defaultGreen: "#48BB78"
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to right, #45CC9C, #0C75E6)"
      }
    }
  },
  plugins: []
};
export default config;
