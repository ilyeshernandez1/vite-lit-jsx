import { Plugin } from 'vite';

/**
 * Add JSX and TSX support for Lit using Vite.
 *
 * @param {string} code - The JavaScript 
 * @param {string} id - The file's ID.
 * @returns {PluginTransformResult}
 */
function LitJSX(): Plugin {
return {
    name: 'lit-jsx',
    enforce: 'pre',
    async transform(code, id) {
      if (id.endsWith('.tsx')) {
        // Replace ((( ... ))) with html`...`
        code = code.replace(/\(\(\(([^)]+)\)\)\)/g, 'html`$1`');

        // Convert expressions inside `html` template literals from { ... } to ${ ... }
        code = code.replace(/html`([^`]+)`/g, (_, content) => {
          const replacedContent = content.replace(/\{\s*(.*?)\s*\}/g, '${$1}');
          return `html\`${replacedContent}\``;
        });

        // Remove the original ((( ... ))) after replacement
        code = code.replace(/\(\(\(([^)]+)\)\)\)/g, '');

        return {
          code,
          map: null, // You can generate source maps if needed.
        };
      }
    },
  };
}

export default LitJSX;