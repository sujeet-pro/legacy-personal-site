import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

throw new Error("assets already downloaded");
const urls = [
  "https://bestofjs.org/logos/vite.svg",
  "https://bestofjs.org/logos/vitest.svg",
  "https://bestofjs.org/logos/esbuild.svg",
  "https://bestofjs.org/logos/playwright.svg",
  "https://assets.devographics.com/projects/testing_library.png",
  "https://assets.devographics.com/projects/pnpm.svg",
  "https://assets.devographics.com/projects/tsc.svg",
  "https://bestofjs.org/logos/nextjs.svg",
  "https://bestofjs.org/logos/svelte.svg",
  "https://bestofjs.org/logos/jest.svg",
  "https://bestofjs.org/logos/cypress.svg",
  "https://bestofjs.org/logos/storybook.svg",
  "https://bestofjs.org/logos/react.svg",
  "https://bestofjs.org/logos/nx.svg",
  "https://assets.devographics.com/projects/npm_workspaces.svg",
  "https://bestofjs.org/logos/nuxt.svg",
  "https://bestofjs.org/logos/rollup.svg",
  "https://assets.devographics.com/projects/yarn_workspaces.png",
  "https://bestofjs.org/logos/puppeteer.svg",
  "https://assets.devographics.com/projects/vuejs.svg",
  "https://bestofjs.org/logos/expo.svg",
  "https://bestofjs.org/logos/electron.svg",
  "https://assets.devographics.com/projects/reactnative.png",
  "https://bestofjs.org/logos/preact.svg",
  "https://bestofjs.org/logos/parcel.svg",
  "https://bestofjs.org/logos/mocha.svg",
  "https://bestofjs.org/logos/webpack.svg",
  "https://bestofjs.org/logos/jasmine.svg",
  "https://assets.devographics.com/projects/lerna.png",
  "https://bestofjs.org/logos/ionic.svg",
  "https://assets.devographics.com/projects/selenium.png",
  "https://bestofjs.org/logos/angular.svg",
  "https://bestofjs.org/logos/gatsby.svg",
  "https://bestofjs.org/logos/browserify.svg",
  "https://bestofjs.org/logos/gulp.svg",
  "https://assets.devographics.com/projects/cordova.jpg",
];

urls.forEach(async (url) => {
  const fileName = url.substring(url.lastIndexOf("/") + 1);
  const res = await fetch(url);
  await writeFile(resolve("./src/icons/" + fileName), res.body);
});
