import htm from "htm";
import { h } from "preact";
import render from "preact-render-to-string";

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
