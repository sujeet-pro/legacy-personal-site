import tailwindcssPluginTypography from "@tailwindcss/typography"
// import tailwindcssPluginForms from '@tailwindcss/forms'
// import tailwindcssPluginAspectRatio from '@tailwindcss/aspect-ratio'
// import tailwindcssPluginContainerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [tailwindcssPluginTypography],
}
