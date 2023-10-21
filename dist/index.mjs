// src/index.ts
function LitJSX() {
  return {
    name: "lit-jsx",
    enforce: "pre",
    async transform(code, id) {
      if (id.endsWith(".tsx")) {
        code = code.replace(/\(\(\(([^)]+)\)\)\)/g, "html`$1`");
        code = code.replace(/html`([^`]+)`/g, (_, content) => {
          const replacedContent = content.replace(/\{\s*(.*?)\s*\}/g, "${$1}");
          return `html\`${replacedContent}\``;
        });
        code = code.replace(/\(\(\(([^)]+)\)\)\)/g, "");
        return {
          code,
          map: null
          // You can generate source maps if needed.
        };
      }
    }
  };
}
var src_default = LitJSX;
export {
  src_default as default
};
