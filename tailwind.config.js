/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          light: "#F7FFF5",
          medium: "#ACACAC",
          dark: "#292f29",
          DEFAULT: "#525252",
        },
        primary: {
          50: "#EDFBE8",
          100: "#CCE8CB",
          200: "#B5EBA2",
          300: "#89CC89",
          DEFAULT: "#70C16F",
          500: "#43A047",
          900: "#007700",
        },
        secondary: {
          50: "#FDF8E0",
          100: "#FBECB0",
          200: "#F8E07C",
          300: "#F5D544",
          DEFAULT: "#F4CB0A",
          500: "#F4C100",
          600: "#F5B300",
          700: "#F6A000",
          800: "#F88F00",
          900: "#F96F00",
        },
      },
      backgroundImage: {
        "hero-illustration-desktop":
          "url('/assets/images/hero-illustration-desktop.svg')",
        "hero-illustration-mobile":
          "url('/assets/images/hero-illustration-mobile.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        hero: "auto 750px",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["20px", "32px"],
        lg: ["28px", "40px"],
        "heading-1": ["64px", "72px"],
        "heading-2": ["48px", "64px"],
        "heading-3": ["28px", "32px"],
      },
      height: {
        800: "800px",
        1000: "1000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
