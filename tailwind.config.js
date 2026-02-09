/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: {
          DEFAULT: "hsl(var(--border))"
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      animation: {
        // Scan animation for dot grid
        scan: 'scan 3s linear infinite',
        
        // Pulse animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Terminal cursor blink
        'blink': 'blink 1s step-end infinite',
        
        // Float animations
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        // Scan animation
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        
        // Cursor blink
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        
        // Float animation
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities, addComponents, theme }) {
      // Add dot pattern utility
      addUtilities({
        '.dot-pattern': {
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        },
        '.dot-pattern-sm': {
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        },
        '.dot-pattern-lg': {
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        },
        '.grid-pattern': {
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        },
      });
      
      addComponents({
        // Glassmorphism components
        '.glass-card': {
          '@apply backdrop-blur-xl bg-black/40 border border-white/20 rounded-2xl': {},
        },
        '.glass-card-light': {
          '@apply backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl': {},
        },
        
        // Status indicators
        '.status-online': {
          '@apply w-3 h-3 bg-green-500 rounded-full animate-pulse': {},
        },
        '.status-offline': {
          '@apply w-3 h-3 bg-red-500 rounded-full': {},
        },
        '.status-away': {
          '@apply w-3 h-3 bg-yellow-500 rounded-full animate-pulse': {},
        },
        
        // Terminal elements
        '.terminal-header': {
          '@apply bg-black/80 border-b border-white/10 px-4 py-3 flex items-center gap-2': {},
        },
        '.terminal-dot': {
          '@apply w-3 h-3 rounded-full': {},
        },
        '.terminal-dot-red': {
          '@apply w-3 h-3 bg-red-500 rounded-full': {},
        },
        '.terminal-dot-yellow': {
          '@apply w-3 h-3 bg-yellow-500 rounded-full': {},
        },
        '.terminal-dot-green': {
          '@apply w-3 h-3 bg-green-500 rounded-full': {},
        },
        
        // Cyberpunk text
        '.cyber-text': {
          '@apply text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold': {},
        },
        '.cyber-text-alt': {
          '@apply text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold': {},
        },
        
        // Interactive buttons
        '.btn-cyber': {
          '@apply px-6 py-3 bg-transparent border-2 border-cyan-400 text-white font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300': {},
        },
        '.btn-cyber-primary': {
          '@apply px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300': {},
        },
      });
    })
  ]
};