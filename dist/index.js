"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
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
