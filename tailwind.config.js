/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    "bg-side-bar": "#EEF2F4",
                    "clr-muted": "#BFC1C5",
                    "clr-primary": "#2F69FE",
                    "clr-dark": "#001739",
                    "clr-progress": "#8CB1FC",
                    "clr-progress-bar": "#294265",
                    "clr-danger": "#E81212",
                    "light": "#FBFBFB",
                    "bg-main-right-side-bar": "#152D4C",
                    "bg-main-radial-bottom-right-side-bar": "#173B7E",
                    "bg-main-radial-top-right-side-bar": "#384D67",
               },
               fontFamily: {
                    "poppins": ["Poppins", "sans-serif"]
               }
          },
     },
     plugins: [],
}

