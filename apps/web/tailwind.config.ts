import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// const ui = require("@acme/ui/tailwind");

// module.exports = {
//   presets: [require("@vercel/examples-ui/tailwind"), ui],
//   // `ui.content` includes a path to the components that are using tailwind in @acme/ui
//   content: ui.content.concat([
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@vercel/examples-ui/**/*.js",
//   ]),
// };
