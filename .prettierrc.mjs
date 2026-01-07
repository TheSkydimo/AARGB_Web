/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  overrides: [
    {
      files: "*.AARGB",
      options: {
        parser: "AARGB",
      },
    },
  ],
};


export default config;
