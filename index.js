import htm from "./web_modules/htm.js";
import { h } from "./web_modules/preact.js";
import render from "./web_modules/preact-render-to-string.js";

const html = htm.bind(h);

function ParagraphLink({ href, children }) {
  return html`
    <p class="paragraph-link">
      <a href=${href}>${children}</a>
    </p>
  `;
}

const vdom = html`
  <main>
    <${ParagraphLink} href="/">Home<//>
    <${ParagraphLink} href="/contact">Contact<//>
  </main>
`;

console.log(render(vdom));
