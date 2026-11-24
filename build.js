const fs = require('fs');
const { greet } = require('./app');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html',
  `<!DOCTYPE html><html><head><title>DevOps Demo</title></head>
   <body><h1>${greet('DevOps Lab')}</h1>
   <p>Built at ${new Date().toISOString()}</p></body></html>`);
console.log('Build complete');
