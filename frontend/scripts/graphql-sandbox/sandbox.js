const http = require('http');
const fs = require('fs');
const path = require('path');
const openurl = require('openurl');

require('dotenv').config();

const sandBoxHtml = fs.readFileSync(
  path.join(__dirname, './sandbox.html'),
  'utf8'
);

const server = http.createServer((request, response) => {
  if (request.url === '/content-sandbox') {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(
      sandBoxHtml
        .replace('this_endpoint', 'Content')
        .replace(
          'replace_with_endpoint',
          process.env.GRAPHQL_CONTENT_SCHEME_URL_PRODUCTION
        )
        .replace(
          'replace_with_bearer',
          process.env.GRAPHQL_CONTENT_SCHEME_AUTH_HEADER_PRODUCTION
        )
    );
    response.end();
  }
});

const port = 4201;

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);

  openurl.open(`http://localhost:${port}/content-sandbox`);
});
