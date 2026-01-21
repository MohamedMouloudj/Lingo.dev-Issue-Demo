<!-- # Overview

This repo is a demonstrating and siting Lingo.dev some of compiler issues.
Follow this [Compiler quick start](https://lingo.dev/en/compiler/quick-start) to setup Lingo.dev compiler config or follow the instructions provided.

# Reproduction Steps

## Dynamic routes are not built correctly Issue

1. Clone this repository.
2. Apply environment variables as needed.
3. Run `npm install` to install dependencies.
4. Run `npm run build` to build the project.
5. Observe the build results related to dynamic routes.
6. See the screenshot below showing the build output:

![Build Output](./poc/Screenshot%202025-12-17%20080448.png)

## Turbopack compatibility Issue

Using nextjs app router with turbopack `--turbopack` will create Lingo folder under app, with only `meta.json` file inside, without `dictionary.js` and this error will keep showing up in the terminal:

```terminal
Module not found: Can't resolve './locales/dictionary.js'
```

## Nextjs 16+ compatibility Issue

Using latest nextjs version with lingo.dev will not work.
Because turbopack is the default builder from nextjs 16+ and lingo.dev is not fully compatible with turbopack yet. -->

# Overview

I have to manually refrsh the page to see the translations applied when using Lingo.dev compiler with Next.js.
