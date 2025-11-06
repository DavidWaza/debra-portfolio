/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",   // include app dir
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        "geist-mono": ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
        "mono-sans": ["var(--font-mono-sans)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
