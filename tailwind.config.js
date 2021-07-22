module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'pinky': '#FC147B',
                'blues': '#207BE7',
                'orange': '#FA6030'
            },
            backgroundImage: theme => ({
                'abstract': "url('/img/5537004.png')",
            }),
            fontFamily: {
                heading: 'PoetsenOne',
                ptext: "'Poppins', sans-serif",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
    ],
}