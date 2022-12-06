/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/index.html", "./pages/perfume.html", "./pages/skincare.html"],

    theme: {



        borderRadius: {
            'none': '0px',
            '2xl': '8rem'
        },

        extend: {
            backgroundImage: {
                'modalLeft': "url('../images/Perfume Trends to Look Out for This Summer.png')",
                'modalCenter': "url('../images/Santal Royal Guerlain.jpg')",
                'modalRight': "url('../images/aboutone.jpg')",
            },

            dropShadow: {
                'red': '0 35px 35px rgb(255 33 33 / 15%)',
                'white': '0 35px 35px rgb(255 255 255 / 15%)'
            },

            colors: {
                'custom': {
                    100: '#fde68a',
                    200: '#bae6fd',
                    300: '#fecaca',
                    400: '#e9d5ff',
                    500: '#a7f3d0',
                    600: '#d9f99d',
                    700: '#c7d2fe',
                    800: '#d1d5db'
                },
            },

        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}