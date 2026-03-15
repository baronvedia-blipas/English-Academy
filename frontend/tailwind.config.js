/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0f0f0f',
                    lighter: '#1a1a1a',
                    card: '#1f2937'
                },
                brand: {
                    green: '#10b981',
                    yellow: '#f59e0b',
                    red: '#ef4444'
                }
            }
        },
    },
    plugins: [],
}
