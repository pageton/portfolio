export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {}, // autoprefixer is usually included in @tailwindcss/postcss but safe to keep or remove. 
        // Tailwind 4 docs say: "We include Autoprefixer automatically..." 
        // so I might not need explicit autoprefixer key if using the plugin?
        // Let's rely on @tailwindcss/postcss handling it or keep it if issues arise.
        // Docs say: "You don't need to add autoprefixer..."
    },
}
