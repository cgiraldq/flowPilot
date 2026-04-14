/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.4s ease-out',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounceSlow 3s infinite',
                'shimmer': 'shimmer 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
                'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                'slide-in-left': 'slideInLeft 0.8s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'scale-in': 'scaleIn 0.6s ease-out',
                'flip': 'flip 0.6s ease-in-out',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)' },
                    '50%': { boxShadow: '0 0 0 10px rgba(99, 102, 241, 0)' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { textShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
                    '50%': { textShadow: '0 0 20px rgba(99, 102, 241, 1), 0 0 30px rgba(147, 51, 234, 0.8)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                pingSlow: {
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0',
                    },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                flip: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            backgroundSize: {
                'shimmer': '1000px 100%',
            },
        },
    },
    plugins: [],
}
