/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            'orange': "linear-gradient(90deg, #f9572a, #ff8a05)",
            'lightOrange': "linear-gradient(90deg, #fd4715, #f9b241)"
         },
         colors: {
            "text": "#ddd6cb"
         },
         screens: {
            'phone': "640px",
            'tablet': '768px',
            'laptop': '1024px',
            'desktop': '1280px',
            'desktop-md': '1536px',
         },
         fontSize: {
            'h1': ['2.5rem', {
               lineHeight: '2rem',
               letterSpacing: '0.15rem',
               fontWeight: '500',
            }],
            'h2': ['2rem', {
               lineHeight: '2.25rem',
               letterSpacing: '0.15rem',
               fontWeight: '700',
            }],
         },
         animation: {
            'slide': 'slide 0.5s ease-out',
         },
         keyframes: {
            slide: {
               '0%': { transform: 'scale(1.1) translateX(-1rem) rotate(-5deg)' },
               '100%': { transform: 'scale(1) translateX(0rem) rotate(0deg)' },
            }
         }

      },
   },
   plugins: [],
};
