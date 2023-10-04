module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:astro/jsx-a11y-strict",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Enable this plugin
      plugins: ["astro"],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        // The script of Astro components uses ESM.
        sourceType: "module",
        project: true,
      },
      rules: {
        // ...commonRules,
        // Enable recommended rules
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: [
        "**/*.astro/*.js",
        "*.astro/*.js",
        "**/*.astro/*.ts",
        "*.astro/*.ts",
      ],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
  ],
}
