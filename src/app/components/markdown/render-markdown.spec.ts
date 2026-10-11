import { renderMarkdown } from './render-markdown';

describe('renderMarkdown', () => {
  it('renders both inline and block mathematics', () => {
    const html = renderMarkdown('Inline $x^2$\n\n$$\\frac{1}{2}$$\n');
    expect(html).toContain('class="katex"');
    expect(html).toContain('katex-display');
    expect(html).not.toContain('katex-error');
  });
  it('preserves author media, links and fenced code without interpreting code as math', () => {
    const html = renderMarkdown('[Repository](https://github.com/drabble)\n\n<video controls src="assets/demo.mp4"></video>\n\n' + '\x60\x60\x60typescript\nconst value = "$x$";\n<x>\n\x60\x60\x60');
    expect(html).toContain('href="https://github.com/drabble"');
    expect(html).toContain('<video controls');
    expect(html).toContain('language-typescript');
    expect(html).toContain('&lt;x&gt;');
    expect(html).not.toContain('class="katex"');
  });
  it('does not trust executable KaTeX commands', () => {
    expect(renderMarkdown('$\\href{javascript:alert(1)}{x}$')).not.toContain('href="javascript:');
  });
  it('supports nested delimiter wrappers in older articles', () => {
    const html = renderMarkdown('$\\[ V = \\frac{R_2}{R_1 + R_2} \\]$ and $\\(R_1\\)$');
    expect(html).toContain('class="katex"');
    expect(html).not.toContain('katex-error');
  });
});
