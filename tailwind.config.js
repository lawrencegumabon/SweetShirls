/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkpink: '#FF74B1',
        medpink: '#FFA1CF',
        lightpink: '#FFD6EC',
        order: '#A7FFE4',
        drip: '#594A4C',
      },
      fontFamily: {
        'courgette': ['Courgette', 'cursive'],
        'nova': ['Nova Round'],
      },
      spacing: {
        '1980': '123.75rem',
        '1000': '50rem',
        '1200': '75rem',
        '1100': '68.75rem',
        '700': '43.75rem',
        '750': '46.875rem',
        '800': '50rem',
        '400': '25rem',
        '600': '35rem',
        '640': '40rem',
        '480': '28rem',
      },
    },
  },
  plugins: [],
}
