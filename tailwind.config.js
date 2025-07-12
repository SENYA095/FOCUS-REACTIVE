/** @type {import('tailwindcss').Config} */
export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  fontFamily: {
                        inter: ["Inter", "sans-serif"],
                  },
                  keyframes: {
                        slide: {
                              "0%": { transform: "translateX(0%)" },
                              "100%": { transform: "translateX(-50%)" },
                        },
                        glow: {
                              "0%, 100%": {
                                    boxShadow: "0 0 0px #00E56D",
                              },
                              "50%": {
                                    boxShadow: "0 0 30px #00E56D",
                              },
                        },
                  },
                  animation: {
                        slide: "slide 20s linear infinite",
                        glow: "glow 1.5s ease-in-out infinite alternate",
                  },
            },
            plugins: [],
      },
};
