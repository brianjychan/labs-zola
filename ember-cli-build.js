'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const babelPlugin = require('ember-auto-import/babel-plugin');

module.exports = (defaults) => {
  const app = new EmberApp(defaults, {
    'ember-ast-hot-load': {
      helpers: [
        'bbl-demux',
        'carto-download-link',
        'extract-layer-stops-for',
        'numeral-format',
        'to-title-case',
        'media',
      ],
      enabled: true,
    },
    'ember-cli-babel': {
      includePolyfill: true,
    },
    '@ember-decorators/babel-transforms': {
      decoratorsBeforeExport: true,
    },
    'ember-cli-uglify': {
      uglify: {
        compress: {
          collapse_vars: false,
        },
      },
    },
    babel: {
      plugins: [babelPlugin, 'transform-object-rest-spread'],
    },
    autoImport: {
      webpack: {
        node: {
          fs: 'empty',
        },
      },
    },
    emberCliConcat: {
      js: {
        concat: process.env.EMBER_ENV === 'production',
        useAsync: process.env.EMBER_ENV === 'production',
      },
      css: {
        concat: false,
      },
    },
  });

  app.import('vendor/ember/ember-template-compiler.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
