/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/index.html", "./pages/perfume.html", "./pages/skincare.html"],

    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}