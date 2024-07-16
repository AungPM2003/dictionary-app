/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    
    screens:{
      'tablet':'768px',
      'mobile':'375px'
    },
    extend: {
      colors:{
        'black':'#050505',
        'secondaryBlack':'#1F1F1F',
        'paleBlack':"#757575",
        'paleWhite':"#F2F2F2",
        'purple':'#A445ED',
        'secondaryPurple':"#8F19E8"
      },
      fontFamily:{
        sans:['Inter','sans-serif'],
        serif:['Lora','serif'],
        mono:['Iconsolata','mono']
      },
    },
  },
  plugins: [],
}

