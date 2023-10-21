# Vite Plugin for Lit JSX Support

This Vite plugin adds JSX and TSX support for Lit components, enabling you to use JSX syntax and TypeScript within your Lit web components.

## Installation

To use this plugin, you need to install it in your Vite project.

```bash
npm install vite-lit-jsx --save-dev
```

# Usage
1. Import the plugin and add it to your Vite configuration:
```js
import { defineConfig } from 'vite';
import ViteLitJSX from 'vite-lit-jsx';

export default defineConfig({
  plugins: [ViteLitJSX()],
});
```

2. In your Lit components (typically TypeScript files with .tsx extension), you can now use JSX syntax and TypeScript. But instead of specify "( ... )" when use JSX, you will need to specify "((( ... )))".
- **Event Handlers**:  Instead of using `@event` syntax for event handlers, you should use `_event`. For example, use `_click` instead of `@click`. This convention applies to all events in your Lit components.
- **Expression Syntax**: Instead of using `${...}` syntax for expressions, you should use `{...}`. This plugin automatically transforms expressions within your html template literals. For example, use `{this.property}` instead of `${this.property}`.
- **Type error**: Currently, we use the most simplest way to integrate JSX into Lit. So, we have some type related error. To don't have most of that error, add `// @ts-nocheck` at the top of the file where you use the syntax.

Example:
```tsx
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  name = 'world';

  render() {
    return (((
      <div>
        <h1>Hello, {this.name}!</h1>
      </div>
    )));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
```

# Features
- Add support for JSX for Lit.

# License
This project is licensed under MIT License.

