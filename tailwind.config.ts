import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A8E6CF',
        'secondary': '#1A535C',
        'info': '#2F80ED',
        'success': '#27AE60',
        'warning': '#FFD166',
        'error': '#EB5757',
        'black-1': '#000000',
        'black-2': '#1D1D1D',
        'black-3': '#282828',
        'black-4': '#333333',
        'white-1': '#FFFFFF',
        'white-2': '#FAFAFA',
        'white-3': '#F5F5F5',
        'white-4': '#EEEEEE',
      },
      boxShadow: {
        'primary-sb': '0 4px 24px rgba(168, 230, 207, 0.25)',
        'black-sb': '0 4px 10px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        quicksand: "var(--font-quicksand)",
        latoRegular: "var(--font-lato-regular)",
        latoBold: "var(--font-lato-bold)",
      },
      fontSize: {
        'body-large': '1.25rem',
        'body-medium': '1.125rem',
        'body-normal': '1rem',
        'body-small': '0.75rem',
        'h1': '3.5rem', // 56px
        'h2': '3rem',   // 48px
        'h3': '2.5rem', // 40px
        'h4': '2rem',   // 32px
        'h5': '1.5rem', // 24px
        'h6': '1.25rem',// 20px
      },
      lineHeight: {
        'h1': '3.85rem', // 61.6px
        'h2': '3.3rem',  // 52.8px
        'h3': '2.75rem', // 44px
        'h4': '2.2rem',  // 35.2px
        'h5': '1.65rem', // 26.4px
        'h6': '1.375rem',// 22px
        'body-large': '1.75rem',
        'body-medium': '1.575rem',
        'body-normal': '1.4rem',
        'body-small': '1.05rem',
      },
    },
  },
  plugins: [],
};
export default config;
