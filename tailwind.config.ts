import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors : {
          primary : '#6B8AFD',
          dark : '#3B3B3B',
          semiDark : '#787878',
          netral : '#8C8C8C',
          semiLight : '#80DED9',
          light : '#EFF3F9',
          error : '#FF0033',
          success : '#5CB85C'
        }
    },
    screens : {
      ssm : "352px",
      xs : "480px",
      ss : "543px",
      sm : "768px",
      md : "1024px",
      lg : "1280px",
      xl : "1440px",
      xxl : "1700px"
    }
  },
  plugins: [],
}
export default config

