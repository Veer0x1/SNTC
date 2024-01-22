/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens:{
      '1500':'1500px',
      '1400': '1400px',
      
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily:{
      'Extenda': ['"Extenda Trial 30 Deca"'],
      'monument': ['monument_extendedregular']
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      width:{
        "1/3-16": "calc((100%/3) - 16%)"
      },
      height:{
        "1/3-16": "calc((100%/3) - 16%)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        objectPosition :{
          'center-center' :'center center'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ellipse1 : "197.5px 0px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'box-1': {
          '0%' :{ left: '0', top: '0'},
          '90%' :{ left: '0', top: '0'},
          '100%' :{ left: '0', top: '0'},
          '2.5%': {left: 'calc(100% / 3)'},
          '12.5%': {left: 'calc(100% / 3)'},
          '15%': { left: 'calc((100% / 3) * 2)', top: '0'},
          '25%': { left: 'calc((100% / 3) * 2)', top: '0'},
          '27.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)' },
          '29.5%': { left: 'calc((100% / 3) * 2)' ,top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)'},
          '31.5%': {left: 'calc(100% / 3)', width: '100%'},
          '33.5%': {left: 'calc(100% / 3)', width: '100%'},
          '35.5%': {left: 'calc((100% / 3) * 2)',top: 'calc(100% / 3)',width: 'calc((100% / 3) - 16px)'},
          '37.5%': {left: 'calc((100% / 3) * 2)',top: 'calc(100% / 3)',width: 'calc((100% / 3) - 16px)'},
          '40%' :{ left: 'calc((100% / 3) * 2)', top : 'calc((100% / 3) * 2)'},
          '50%' :{ left: 'calc((100% / 3) * 2)', top : 'calc((100% / 3) * 2)'},
          '52.5%': { left: 'calc(100% / 3)'},
          '62.5%': { left: 'calc(100% / 3)'},
          '65%': { left: '0', top: 'calc((100% / 3) * 2)'},
          '75%': { left: '0', top: 'calc((100% / 3) * 2)'},
          '77.5%': {top: 'calc(100% / 3)'},
          '87.5%': {top: 'calc(100% / 3)'}
        },
        'box-2': {
          '0%': { left: 'calc(100% / 3)' },
          '90%': { left: 'calc(100% / 3)' },
          '100%': { left: 'calc(100% / 3)' },
          '2.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '12.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '15%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '17%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '19%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '21%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '23%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '25%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '27.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '37.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '40%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '50%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '52.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '62.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '65%': { left: 0, top: 'calc(100% / 3)' },
          '75%': { left: 0, top: 'calc(100% / 3)' },
          '77.5%': { left: 0, top: 0 },
          '87.5%': { left: 0, top: 0 },
        },
        'box-3': {
          '0%': { left: 'calc((100% / 3) * 2)' },
          '90%': { left: 'calc((100% / 3) * 2)' },
          '100%': { left: 'calc((100% / 3) * 2)' },
        
          '2.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)' },
          '12.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)' },
        
          '4.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '10.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
        
          '6.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '8.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        
          '15%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '25%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        
          '27.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '37.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        
          '40%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '50%': { left: 0, top: 'calc((100% / 3) * 2)' },
        
          '52.5%': { left: 0, top: 'calc(100% / 3)' },
          '62.5%': { left: 0, top: 'calc(100% / 3)' },
        
          '65%': { left: 0, top: 0 },
          '75%': { left: 0, top: 0 },
        
          '77.5%': { left: 'calc(100% / 3)', top: 0 },
          '87.5%': { left: 'calc(100% / 3)', top: 0 },
        },
        'box-4': {
          '0%': { top: 'calc(100% / 3)' },
          '90%': { top: 'calc(100% / 3)' },
          '100%': { top: 'calc(100% / 3)' },
        
          '2.5%': { left: 0, top: 0 },
          '12.5%': { left: 0, top: 0 },
        
          '15%': { left: 'calc(100% / 3)', top: 0 },
          '25%': { left: 'calc(100% / 3)', top: 0 },
        
          '27.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '37.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
        
          '40%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '42%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '48%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '50%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
        
          '44%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '46%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        
          '52.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '62.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        
          '65%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '75%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        
          '77.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '87.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
        },  
        'box-5': {
          '0%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '90%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '92%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '98%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '100%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
        
          '2.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '12.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        
          '15%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '25%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        
          '27.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '37.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
        
          '40%': { left: 0, top: 'calc(100% / 3)' },
          '50%': { left: 0, top: 'calc(100% / 3)' },
        
          '52.5%': { left: 0, top: 0 },
          '62.5%': { left: 0, top: 0 },
        
          '65%': { left: 'calc(100% / 3)', top: 0 },
          '75%': { left: 'calc(100% / 3)', top: 0 },
        
          '77.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '87.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
        
          '94%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '96%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        },
        'box-6': {
          '0%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '90%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '100%': { left: 0, top: 'calc((100% / 3) * 2)' },
        
          '2.5%': { left: 0, top: 'calc(100% / 3)' },
          '12.5%': { left: 0, top: 'calc(100% / 3)' },
        
          '15%': { left: 0, top: 0 },
          '25%': { left: 0, top: 0 },
        
          '27.5%': { left: 'calc(100% / 3)', top: 0 },
          '37.5%': { left: 'calc(100% / 3)', top: 0 },
        
          '40%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '50%': { left: 'calc((100% / 3) * 2)', top: 0 },
        
          '52.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '54.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '60.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '62.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
        
          '56.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '58.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        
          '65%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '75%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        
          '77.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '87.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        },
        'box-7': {
          '0%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '90%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '100%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        
          '2.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '12.5%': { left: 0, top: 'calc((100% / 3) * 2)' },
        
          '15%': { left: 0, top: 'calc(100% / 3)' },
          '25%': { left: 0, top: 'calc(100% / 3)' },
        
          '27.5%': { left: 0, top: 0 },
          '37.5%': { left: 0, top: 0 },
        
          '40%': { left: 'calc(100% / 3)', top: 0 },
          '50%': { left: 'calc(100% / 3)', top: 0 },
        
          '52.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '62.5%': { left: 'calc((100% / 3) * 2)', top: 0 },
        
          '65%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '67%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '73%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
          '75%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)' },
        
          '69%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '71%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        
          '77.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '87.5%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        },
        'box-8': {
          '0%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '90%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
          '100%': { left: 'calc((100% / 3) * 2)', top: 'calc((100% / 3) * 2)' },
        
          '2.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
          '12.5%': { left: 'calc(100% / 3)', top: 'calc((100% / 3) * 2)' },
        
          '15%': { left: 0, top: 'calc((100% / 3) * 2)' },
          '25%': { left: 0, top: 'calc((100% / 3) * 2)' },
        
          '27.5%': { left: 0, top: 'calc(100% / 3)' },
          '37.5%': { left: 0, top: 'calc(100% / 3)' },
        
          '40%': { left: 0, top: 0 },
          '50%': { left: 0, top: 0 },
        
          '52.5%': { left: 'calc(100% / 3)', top: 0 },
          '62.5%': { left: 'calc(100% / 3)', top: 0 },
        
          '65%': { left: 'calc((100% / 3) * 2)', top: 0 },
          '75%': { left: 'calc((100% / 3) * 2)', top: 0 },
        
          '77.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)', borderRadius: '100%' },
          '79.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)', borderRadius: '100%' },
          '85.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)', borderRadius: '100%' },
          '87.5%': { left: 'calc((100% / 3) * 2)', top: 'calc(100% / 3)', width: 'calc((100% / 3) - 16px)', borderRadius: '100%' },
        
          '81.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
          '83.5%': { left: 'calc(100% / 3)', top: 'calc(100% / 3)', width: '100%' },
        },
        'first-text': {
          '50%': {transform: 'translateX(-100%)',opacity: 1},
          '50.05%': {opacity: 0},
          '50.1%': { transform: 'translateX(100%)',opacity: 1},
          '100%': {transform: 'translateX(0%)'}
        },
        'second-text': {
            '50%': {transform: 'translateX(-100%)'},
            '100%': {transform: 'translateX(-200%)'},
            '0%': {transform: 'translateX(0%)'}
        },
        'circle-rotate':{
            '0%': {transform: 'rotate(0)'},
            '100%': {transform: 'rotate(360deg)'}
        },
        'top-ring-move': {
          '0%': { transform: 'translateY(0)'},
          '50%': {transform: 'translateY(5px)'},
          '100%': {transform: 'translateY(0)'},
        },
        'bottom-ring-move': {
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-5px)'},
          '100%': {transform: 'translateY(0)'},
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'box-2' : "box-2 30s infinite",
        'box-3' : "box-3 30s infinite",
        "box-1" : "box-1 30s infinite",
        'box-4' : "box-4 30s infinite",
        "box-5" : "box-5 30s infinite",
        'box-6' : "box-6 30s infinite",
        'box-7' : "box-7 30s infinite",
        'box-8' : "box-8 30s infinite",
        'first-text' : "first-text 26s linear infinite",
        'second-text' : "first-text 26s linear infinite",
        'circle-rotate' : "circle-rotate 18s linear infinite",
        'top-ring-move' : "top-ring-move 2.5s linear infinite",
        'bottom-ring-move' : "bottom-ring-move 2.5s linear infinite",
      },
      backgroundImage :{
        "Technex-bg" : "url('https://www.yudiz.com/codepen/photography-banner/frame.png')",
      },
      transformOrigin:{
        'origin': "0 0",
        'right-top':'right top',
        'center-200vh': 'center 200vh'
      },
      objectPosition : {
        "center-center" :"center center"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
