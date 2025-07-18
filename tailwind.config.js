module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#D4A574", // Warm gold for luxury and elegance
        "primary-dark": "#B8956A", // Deeper gold for hover states
        secondary: "#8B4513", // Rich terracotta brown for sophistication
        background: "#FDF8F3", // Warm cream background
        surface: "#FFFFFF", // Pure white for cards and forms
        "text-primary": "#2C1810", // Deep brown for maximum contrast
        "text-secondary": "#6B4423", // Medium brown for supporting text
        success: "#228B22", // Green for positive feedback
        warning: "#FF8C00", // Orange for urgency
        error: "#DC143C", // Red for errors
        border: "#E6D7C3", // Light sand color for subtle borders
        accent: "#CD853F", // Desert sand accent
        "accent-light": "#F4E4BC", // Light sand for backgrounds
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], // Elegant serif for luxury feel
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Clean, readable body text
        poppins: ['Poppins', 'sans-serif'], // Modern, friendly headlines
        montserrat: ['Montserrat', 'sans-serif'], // Bold, action-oriented CTAs
        cormorant: ['Cormorant Garamond', 'serif'], // Elegant serif for testimonials
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(212, 165, 116, 0.25)', // Gold CTA button elevation
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)', // Card elevation
      },
      transitionDuration: {
        '250': '250ms', // Smooth interactions
        '300': '300ms', // Scroll animations
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}