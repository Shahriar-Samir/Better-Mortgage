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
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenDefault: '#004733'
      },
      fontFamily: {
        myFont1: ['myFont1', 'Arial', 'sans-serif'], 
        myFont2: ['myFont2', 'Arial', 'sans-serif'], 
        myFont3: ['myFont3', 'Arial', 'sans-serif'], 
        myFont4: ['myFont4', 'Arial', 'sans-serif'], 
        myFont5: ['myFont5', 'Arial', 'sans-serif'], 
        myFont6: ['myFont6', 'Arial', 'sans-serif'], 
        myFont7: ['myFont7', 'Arial', 'sans-serif'], 
        myFont8: ['myFont8', 'Arial', 'sans-serif'], 
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['light']
  }

};
export default config;
