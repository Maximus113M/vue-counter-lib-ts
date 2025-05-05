const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const vue = require('rollup-plugin-vue')
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['vue'],
  plugins: [
    vue(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    resolve({
      extensions: ['.js', '.ts', '.vue']
    }),
    commonjs(),
  ]
}
