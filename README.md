# Astro ReactJS Static Site Demo

Experimenting with Astro to see what all the fuss is about, and see how it fits with ReactJS.

We want to create a project that lives in the root of the repository.

This website will use ReactJS components to improve its DRYness and allow for complex page content, but Astro will compile it into a set of static HTML, CSS and JS files. This means that we do _not_ get a SPA - we want multiple HTML files!

## Recreation Steps

1. Run `npm create astro@latest` and create the project in the current directory (type `.` when asked for where the project should be created)`. This is a new, empty project that does not use TypeScript. Install dependencies when the prompt asks you if it should do that.

2. Add ReactJS to the project as per the Astro documentation. At the time of writing, this is just running the command `npx astro add react`, allowing any dependencies and default configuration to go through as part of the command's process.

3. Create a ReactJS component. For the sake of just getting stuff done simply, I made a footer. Check it here: [Footer component.](./src/components/Footer.jsx)

4. Import the ReactJS component into your `.astro` file. Import statements go into the "frontmatter" of the file, and usage goes into the body of the file. See the example here: [index.astro](./src/pages/index.astro)

5. Build and/or run your website. Could be done with either `npm run build` and then checking your website via a webserver or editor extension (eg. VSCode Live Server), or by using a dev command instead: `npm run dev`

6. For interactive components (eg. I made a counter widget [here](./src/components/Counter.jsx)), you can write them the same way as non-interactive components - but they must be used differently. Astro expects a `client` prop to tell it how to load the JS associated with that interactivity. Check the example here: [counter.astro](./src/pages/counter.astro)

7. Additional `*.astro` pages in the `./src/pages` directory become routes with their own HTML file. File-based routing, I know. This can be used in complex ways, read the docs here: [https://docs.astro.build/en/guides/routing/](https://docs.astro.build/en/guides/routing/)

8. When deploying, you want to make sure you or your CI/CD platform run `npm run build`, and then publish the `./dist/` directory. It contains an `index.html` file in its root, if your `./src/pages/` directory contains an `index.astro` file in its root. 

## Useful Links

- Astro's setup guide: [https://docs.astro.build/en/install-and-setup/](https://docs.astro.build/en/install-and-setup/)
- Astro's ReactJS integration guide: [https://docs.astro.build/en/guides/integrations-guide/react/](https://docs.astro.build/en/guides/integrations-guide/react/)
- Astro's documentation on how to load interactive components: [https://docs.astro.build/en/guides/framework-components/#hydrating-interactive-components](https://docs.astro.build/en/guides/framework-components/#hydrating-interactive-components)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
