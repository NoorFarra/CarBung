import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        blob: "blob 2s infinite",
      },




      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.05)",
          },
          "66%": {
            transform: "scale(0.95)",
          },
          "100%": {
            transform: "scale(1)",
          },
        }
      },
      backgroundImage: {
        "slatepage": "url('https://th.bing.com/th/id/R.006498f9f84bc48e8177bab8bb9baa5b?rik=KXiQygQjL2ZHsg&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2017%2f12%2f10%2fultra-4k-wallpapers_110631198_312.jpg&ehk=YmJhpmQDPJA0mrSxonBgaHfPfkBJ2T2t%2bxehW8Xpdus%3d&risl=&pid=ImgRaw&r=0')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      fontFamily: {
        "logoFont": ["Madimi One", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
