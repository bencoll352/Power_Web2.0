import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer((req,res)=>{let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end()};const target=path.resolve(root,'.'+(url==='/'?'/index.html':url));if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end()};fs.readFile(target,(e,data)=>{if(e){res.writeHead(404);return res.end('Page not found')};res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'})[path.extname(target)]||'application/octet-stream'});res.end(data)})}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
