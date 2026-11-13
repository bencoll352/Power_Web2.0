import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json'
};

http.createServer((req, res) => {
  let url;
  try {
    url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400);
    return res.end();
  }
  let target = path.resolve(root, '.' + (url === '/' ? '/index.html' : url));
  if (!target.startsWith(root + path.sep)) {
    res.writeHead(403);
    return res.end();
  }
  if (!fs.existsSync(target) && fs.existsSync(target + '.html')) {
    target = target + '.html';
  }

  fs.stat(target, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Page not found');
    }

    const ext = path.extname(target).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    const total = stats.size;
    const range = req.headers.range;

    if (range && ext === '.mp4') {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(target, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType
      });
      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': total,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes'
      });
      fs.createReadStream(target).pipe(res);
    }
  });
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));

