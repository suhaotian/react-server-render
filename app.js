require('node-jsx').install();

var koa = require('koa');
var router = require('koa-router');
var static = require('koa-static');

var fs = require('fs');
var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');

var app = koa();

var route = router();
var index = fs.readFileSync('./index.html','utf8');
var HelloWorld = React.createFactory(HelloWorld);
var s = React.renderToString(HelloWorld());
var reactData = index.replace('{{component}}',s);
route.get('/', function *(next) {
  this.type = 'html';
  this.body = reactData;
})

app.use(static('./public'));
app.use(route.routes());

app.listen(3000);
