/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: { // Define the animation steps
        fadeIn: {
          '0%': { opacity: '0' },   // At the start (0%), the element is completely transparent
          '100%': { opacity: '1' }, // At the end (100%), the element is fully opaque
        },
      },
      animation: { // Link a utility class name to your defined keyframe
        fadeIn: 'fadeIn 2s ease-out forwards', // 'fadeIn' is the name of our keyframe, 0.5s duration, ease-out timing, 'forwards' means it stays at the end state
      },

      
      // fontFamily: {
      //   sans: ['Open Sans', 'sans-serif'], // Default for normal text
      //   heading: ['Poppins', 'sans-serif'], // For titles & buttons
      // },
      
    },
  },
  plugins: [],
}

