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
        'primary': '#092C4C',
        'secondary': '#F2994A',
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
      }
    },
  },
  plugins: [],
};
export default config;
