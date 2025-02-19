/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      xs: "460px",
      sm: "640px",
      md: "820px",
      lg: "1000px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: "#006ce7",
      red: "#ef4444",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      size: {
        4.5: "1.125rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      borderWidth: {
        1.5: "1.5px",
        3: "3px",
      },
      maxWidth: {
        xl: "37.5rem",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      minHeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
