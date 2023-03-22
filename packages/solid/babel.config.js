const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                // For development, we want to alias the library to the source
                ['@dank-style/media-query']: path.join(
                  __dirname,
                  '../media-query/src'
                ),
                ['@dank-style/css-injector']: path.join(
                  __dirname,
                  '../css-injector/src'
                ),

                ['@dank-style/cssify']: path.join(__dirname, '../cssify/src'),
                ['@dank-style/config']: path.join(__dirname, '../config/src'),
                ['@dank-style/convert-utility-to-sx']: path.join(
                  __dirname,
                  '../convert-utility-to-sx/src'
                ),
              },
            },
          ]
        : ['transform-remove-console'],
    ],
  };
};
