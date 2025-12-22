/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    // Generate `hover:` utilities without wrapping them in `@media (hover: hover)`.
    // This makes hover styles work on hybrid/touch-primary devices (e.g. Windows tablets)
    // and when testing via device emulation.
    hoverOnlyWhenSupported: false,
  },
};
