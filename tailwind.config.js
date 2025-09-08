/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['"BebasNeue"', 'sans-serif'], // Use with class "font-bebas"
                clash: ['"ClashDisplay"', 'sans-serif'], // Use with class "font-clash"
                inter: ['Inter', 'sans-serif'], // Default Inter
            },
        },
    },
    plugins: [],
}
