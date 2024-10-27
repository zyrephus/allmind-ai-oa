import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',  // 72 = 18rem (288px)
        '80': '20rem',  // 80 = 20rem (320px)
        '96': '24rem',  // 96 = 24rem (384px)
        '128': '32rem', // 128 = 32rem (512px)
        '144': '36rem', // 144 = 36rem (576px)
        '160': '40rem', // 160 = 40rem (640px)
        '192': '48rem', // 192 = 48rem (768px)
        '224': '56rem', // 224 = 56rem (896px)
        '256': '64rem', // 256 = 64rem (1024px)
        '288': '72rem', // 288 = 72rem (1152px)
        '320': '80rem', // 320 = 80rem (1280px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;