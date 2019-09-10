import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production'
  ? 'dist/index.prod.js' : 'dist/index.js';

export default {
  input: 'src/index.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  external: [
    'react'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
  ]
}