## About

This project is an exploratory project on how to use design tokens in our UI development workflow.
The main workflow is from Figma(using [Token Studio plugin](https://tokens.studio/)) we will export our design tokens into json form, then we will use [style-dictionary](https://amzn.github.io/style-dictionary/) (via [SD Transforms](https://github.com/tokens-studio/sd-transforms)) library to generate resources (css, scss, js, ts) that can be consumed by our UI application.

```
Figma Design --(export via token studio)--> <tokens>.json -- generator via style-dict --> scss, css, js tokens --> Application 
```

### Prerequisites
This project, both token generation and ui application are using node 18, particularly node 18.14.2, you can install it via nvm.

### Project structure
In this demo, the root project is a NextJS Application (react and typescript)
We export the json tokens from figma using tokens studio plugin and place it in ./figma-design/tokens

### Generating styles
Whenever the design tokens change, we need to regenerate our styling files whether they be css, scss, ts, or js files.
The generated application code usable resources will be generated in ./src/tokens-build
```
1. Go to ./figma-design
2. nvm use 18
3. npm install
4. node generate-styles.js
```

### Running the code 
To run the code in dev mode
```
1. nvm use 18
2. npm install
3. npm run dev
```
