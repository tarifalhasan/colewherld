/** @type {import('tailwindcss').Config} */
import WithMt from '@material-tailwind/react/utils/withMT';
export default WithMt({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#111417',
        primary: '#1D2328',

        DodgerBlue: '#0198FC',
        SpringGreen: '#00E69C',
        whiteText: '#F3F1F5',
        lightGray: '#8D98AF',
      },
    },
  },
  plugins: [],
});
