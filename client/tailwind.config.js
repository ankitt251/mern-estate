/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        dancingscript: ['Dancing Script', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        arvo: ['Arvo', 'serif'],
        lato: ['Lato', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        kalam: ['Kalam', 'cursive'],
        baloo: ['Baloo 2', 'cursive'],
        inconsolata: ['Inconsolata', 'monospace'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
