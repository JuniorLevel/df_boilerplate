const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');

module.exports = {
	input: 'src/index.js',
	output: { file: 'build/index.js', format: 'cjs' },
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx'],
		}),
		commonjs(),
		terser(),
		babel({
			babelrc: true,
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
	],
	external: ['react', 'react-dom'],
};
