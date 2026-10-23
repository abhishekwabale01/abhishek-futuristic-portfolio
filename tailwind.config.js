/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] }, colors: { ink: '#070914', panel: '#101323', violet: '#9b8cff', cyan: '#75e6e2' } } },
  plugins: [],
}
