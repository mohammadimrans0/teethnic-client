/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

//   daisyui: {
//   themes: [
//     {
//       doctorTheme: {
//         primary: '#0fcfec',
//         secondary: '#19d3ae',
//         accent: '#3a4256',
//         neutral: '#3d4451',
//         // 'base-100': 'ffffff',
//       }
//     }
//   ]
// },
