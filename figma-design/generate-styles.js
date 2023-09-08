const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

registerTransforms(StyleDictionary);

const buildOutputDir = '../src/tokens-build/';

const sd = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'tokens-studio',
      buildPath: buildOutputDir,
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/es6',
        },
        {
          destination: 'variablesModule.js',
          format: 'javascript/module-flat',
        },
        {
          destination: 'variablesUMD.js',
          format: 'javascript/umd',
        },
        {
          destination: 'variablesObj.js',
          format: 'javascript/object',
        },
        {
          destination: 'variablesES6.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.js',
          format: 'javascript/module',
        }
      ],
    },
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: buildOutputDir,
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/fontFamily',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab',
      ],
      buildPath: buildOutputDir,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
