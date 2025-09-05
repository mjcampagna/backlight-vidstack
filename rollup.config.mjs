import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/vidstack.js',
  output: {
    file: 'dist/vidstack.bundle.js',
    format: 'esm',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  treeshake: { moduleSideEffects: true },
  plugins: [
    resolve({ browser: true, exportConditions: ['browser','module','default'] }),
    commonjs(),
    css({ output: 'dist/vidstack.css' }),
    terser(),
  ],
};
