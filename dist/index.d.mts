import { Plugin } from 'vite';

/**
 * Add JSX and TSX support for Lit using Vite.
 *
 * @param {string} code - The JavaScript
 * @param {string} id - The file's ID.
 * @returns {PluginTransformResult}
 */
declare function LitJSX(): Plugin;

export { LitJSX as default };
