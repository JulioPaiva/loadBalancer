const express = require('express'),
    request = require('request'),
    servers = ['http://localhost:6001', 'http://localhost:6002'];

let cur = 0;

const handler = (req, res) => {
  req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
  cur = (cur + 1) % servers.length;
};

const server = express().get('*', handler).post('*', handler);

server.listen(3080);
