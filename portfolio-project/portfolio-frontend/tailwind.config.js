/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      // <h1 className="font-roboto text-4xl font-thin">Thin (100)</h1>
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      // fontWeight: {
      //   thin: "100",
      //   extralight: "200",
      //   light: "300",
      //   normal: "400",
      //   medium: "500",
      //   semibold: "600",
      //   bold: "700",
      //   extrabold: "800",
      //   black: "900",
      // },
    },
  },
  plugins: [],
};
