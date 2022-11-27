/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/index.html", "./pages/perfume.html", "./pages/skincare.html"],

    theme: {
        extend: {
            backgroundImage: {
                'modalLeft': "url('../images/Perfume Trends to Look Out for This Summer.png')",
                'modalCenter': "url('../images/Santal Royal Guerlain.jpg')",
                'modalRight': "url('../images/aboutone.jpg')",
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}