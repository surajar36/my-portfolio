/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'], // Use with class "font-bebas"
                clash: ['Clash Display', 'sans-serif'], // Use with class "font-clash"
                inter: ['Inter', 'sans-serif'], // Default Inter
            },
        },
    },
    plugins: [],
}
