import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { join } from 'path';
import 'zone.js/node';
import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const compression = require('compression');
  const server = express();
  const distFolder = join(process.cwd(), 'dist/frontend/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  enableProdMode();
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    inlineCriticalCss: false,
  }));

  // proxy middleware options
const optionsApi = {
  target: 'http://backend:8000', // target host
  changeOrigin: false, // needed for virtual hosted sites
  ws: true, // proxy websockets
};

const options = {
  target: 'https://media.barrelwisdom.com', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/media': '/file/barrelwisdom', // rewrite path
  },
};

// create the proxy (without context)
const apiProxy = createProxyMiddleware(optionsApi);
const mediaProxy = createProxyMiddleware(options);
  server.use(compression())
  server.use('/api', apiProxy);
  server.use('/auth', apiProxy);
  server.use('/media', mediaProxy);

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl },
      { provide: 'serverUrl', useValue: `${req.protocol}://${req.get('host')}`}] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
