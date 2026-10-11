import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const browserFolder = resolve(dirname(fileURLToPath(import.meta.url)), '../browser');
const server = express();
const engine = new AngularNodeAppEngine();
server.disable('x-powered-by');
server.use(express.static(browserFolder, { maxAge: '1y', index: false, redirect: false }));
server.use((request, response, next) => {
  engine.handle(request, { assetRoot: browserFolder })
    .then(result => result ? writeResponseToNodeResponse(result, response) : next())
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] || 4000);
  server.listen(port, () => console.log(`Blog server listening on port ${port}`));
}
export const reqHandler = createNodeRequestHandler(server);
