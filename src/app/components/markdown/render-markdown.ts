import { Marked, type TokenizerExtension, type Tokens } from 'marked';
import katex from 'katex';

const math = (block: boolean): TokenizerExtension => ({
  name: block ? 'blockMath' : 'inlineMath',
  level: block ? 'block' : 'inline',
  start: source => source.search(block ? /\$\$|\\\[/ : /\$(?!\$)|\\\(/),
  tokenizer(source) {
    const match = (block
      ? /^(?:\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\])(?:\n|$)/
      : /^(?:\$(?!\$)([^\n$]+?)\$(?!\$)|\\\(([^\n]+?)\\\))/).exec(source);
    return match ? { type: block ? 'blockMath' : 'inlineMath', raw: match[0], text: match[1] ?? match[2] } : undefined;
  },
});
// Some authored posts nest bracket delimiters inside dollar delimiters.
const renderMath = (text: string, displayMode: boolean) => katex.renderToString(text.replace(/\\[()[\]]/g, ''), {
  displayMode, throwOnError: false, trust: false, strict: 'ignore',
});
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const renderer = new Marked({
  gfm: true,
  extensions: [
    { ...math(true), renderer: token => renderMath(token['text'] as string, true) },
    { ...math(false), renderer: token => renderMath(token['text'] as string, false) },
  ],
  renderer: {
    code(token: Tokens.Code) {
      const language = (token.lang ?? '').split(/\s/, 1)[0].replace(/[^\w-]/g, '');
      return `<pre class="line-numbers"><code class="language-${language}">${escape(token.text)}\n</code></pre>\n`;
    },
  },
});

// Input is restricted to author-controlled repository posts, including their media HTML.
export function renderMarkdown(source: string): string {
  return renderer.parse(source, { async: false });
}
