/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          light: "#F7FFF5",
          medium: "#ACACAC",
          dark: "#525252",
          darker: "#292f29",
          DEFAULT: "#F7FFF5",
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
        "hero-illustration-desktop": "url('/assets/images/hero.svg')",
        "hero-illustration-mobile": "url('/assets/images/hero-mobile.svg')",
        "hero-gradient":
          "linear-gradient(135.33deg, #030503 26.49%, #126203 76.79%)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        hero: "auto 750px",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["18px", "32px"],
        lg: ["22px", "40px"],
        "heading-1": ["64px", { fontSize: "76px", fontWeight: "bold" }],
        "heading-2": ["48px", { fontSize: "64px", fontWeight: "bold" }],
        "heading-3": ["28px", { fontSize: "32px", fontWeight: "bold" }],
      },
      height: {
        800: "800px",
        1000: "1000px",
      },
      boxShadow: {
        glow: "0px 0px 128px 16px rgba(255, 255, 255, 0.28)",
        "glow-green": "0px 0px 128px 16px #70C16F33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
