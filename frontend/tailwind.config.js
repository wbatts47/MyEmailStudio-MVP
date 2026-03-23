/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"DM Serif Display"', 'Georgia', 'serif'],
                body: ['"DM Sans"', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                es: {
                    bg: '#0a0a0a',
                    surface: '#141414',
                    'surface-light': '#1a1a1a',
                    border: '#2a2a2a',
                    green: '#4CAF50',
                    'green-dark': '#3a8f3e',
                    'green-dim': 'rgba(76,175,80,0.15)',
                    gold: '#F5D000',
                    'gold-dim': 'rgba(245,208,0,0.15)',
                    text: '#f0f0f0',
                    muted: '#888888',
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                wave: {
                    '0%, 100%': { transform: 'scaleY(0.25)' },
                    '50%': { transform: 'scaleY(1)' },
                },
                'pulse-ring': {
                    '0%': { transform: 'scale(1)', opacity: '0.6' },
                    '100%': { transform: 'scale(2.2)', opacity: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(76,175,80,0.3)' },
                    '50%': { boxShadow: '0 0 50px rgba(76,175,80,0.6)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                wave: 'wave 0.8s ease-in-out infinite alternate',
                'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
                float: 'float 3.5s ease-in-out infinite',
                blink: 'blink 1s step-end infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                shimmer: 'shimmer 2s linear infinite',
            },
            boxShadow: {
                'green-glow': '0 0 30px rgba(76,175,80,0.3)',
                'green-glow-lg': '0 0 60px rgba(76,175,80,0.4)',
                'gold-glow': '0 0 30px rgba(245,208,0,0.25)',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};
