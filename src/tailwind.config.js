module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#003366',  // Dark Blue (Navy) for headings, footers, or key sections
        'primary-light': '#0066FF', // Bright Blue for CTA buttons
        'accent-gold': '#FFD700',   // Gold for highlights or small accent areas
        'accent-silver': '#C0C0C0', // Silver for secondary accents
        'background-light': '#F2F2F2', // Light Grey background sections
        'text-dark': '#333333',  // Dark Gray for body text
        'text-light': '#808080', // Light Gray for secondary text
        'white': '#FFFFFF',  // Standard white for backgrounds or text on dark sections
      }
    },
  },
  plugins: [],
}
