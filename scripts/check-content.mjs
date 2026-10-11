import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const postsRoot = resolve(root, 'src/assets/posts');
const slugs = readdirSync(postsRoot, {withFileTypes: true}).filter(entry => entry.isDirectory()).map(entry => entry.name).sort().reverse();
const listed = JSON.parse(readFileSync(resolve(root, 'src/assets/posts.json'), 'utf8'));
const routes = new Set(readFileSync(resolve(root, 'routes.txt'), 'utf8').trim().split(/\r?\n/));
const problems = [];
// Punctuation inside code, URLs, math, and embedded players is not prose.
const protectedContent = /```[^\n]*\n[\s\S]*?```|~~~[^\n]*\n[\s\S]*?~~~|`[^`\n]+`|<(video|iframe|audio|script|style|div|figure|table)\b[\s\S]*?<\/\1\s*>|<[^>]+>|!\[[^\]]*\]\([^\n]*\)|\[[^\]]+\]\([^\s)]*(?:\s+"[^"]*")?\)|https?:\/\/[^\s<>\)]+|\$\$[\s\S]*?\$\$|\$[^$\n]+\$|&[a-zA-Z0-9#]+;/g;

if (new Set(listed).size !== listed.length || JSON.stringify(listed) !== JSON.stringify(slugs)) problems.push('posts.json must list every post once, newest first');
for (const slug of slugs) {
  const metadata = JSON.parse(readFileSync(resolve(postsRoot, slug, 'index.json'), 'utf8'));
  const markdown = readFileSync(resolve(postsRoot, slug, 'post.md'), 'utf8');
  const prose = markdown.replace(protectedContent, '');
  if (/[—;]/.test(prose)) problems.push(slug + ': em dash or semicolon in prose');
  if (/[—;]/.test(metadata.description)) problems.push(slug + ': em dash or semicolon in description');
  if (!metadata.title || !metadata.description || !metadata.tag || !metadata.date) problems.push(slug + ': incomplete metadata');
  if (!routes.has('/post/' + slug)) problems.push(slug + ': missing prerender route');
  if (!existsSync(resolve(postsRoot, slug, metadata.thumbnail))) problems.push(slug + ': missing thumbnail');
  // Verify new post media. Historical external links require a separate link audit.
  if (slug === '2026-10-10-alpha-pocket') {
    for (const match of markdown.matchAll(/assets\/posts\/[^\s)"<>]+/g)) {
      if (!existsSync(resolve(root, 'src', match[0]))) problems.push(slug + ': missing media ' + match[0]);
    }
  }
}
if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else console.log('Checked ' + slugs.length + ' posts, metadata, routes, and new article media.');
