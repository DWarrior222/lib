import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const path = require('path');
const resolve = _path => path.resolve(__dirname, '../', _path);
const version = process.env.VERSION || require('../package.json').version;
const banner =
  `/* !
  * library v${version}
  * 
  * (c) ${new Date().getFullYear()} gsj
  */
`

const outputs = [
  // {
  //   file: resolve('lib/bundle.js'),
  //   format: 'umd',
  //   env: 'development',
  //   globals: {
  //     axios: 'axios'
  //   }
  // },
  // {
  //   file: resolve('lib/bundle.min.js'),
  //   format: 'umd',
  //   env: 'production',
  //   globals: {
  //     axios: 'axios'
  //   }
  // },
  {
    file: resolve('lib/bundle.common.js'),
    format: 'cjs',
    env: 'development'
  },
  {
    file: resolve('lib/bundle.common.min.js'),
    format: 'cjs',
    env: 'production'
  },
  {
    file: resolve('lib/bundle.esm.js'),
    format: 'es',
    env: 'development'
  },
  {
    file: resolve('lib/bundle.esm.min.js'),
    format: 'es',
    env: 'production'
  }
];

function buildRollupConfig(output) {
  let config = {
    input: resolve('src/index.js'),
    plugins: [
      json(),
      nodeResolve(),
      babel({
        extensions: ['.js'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**']
      }),
      commonjs()
    ],
    external: [
      'axios',
      /@babel\/runtime-corejs3/
    ],
    output: {
      file: output.file,
      format: output.format,
      banner,
      name: 'library',
      exports: 'named'
    }
  };

  if (output.env && output.env.includes('prod')) {
    config.plugins.push(uglify());
  }
  if (output.globals) {
    config.output.globals = output.globals;
  }

  return config;
}

export default outputs.map(buildRollupConfig);