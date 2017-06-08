'use strict';

const koa = require('koa');
const hbs = require('koa-hbs');
const serve = require('koa-static');
const router  = require('koa-router')();

const app = new koa();

// koa-hbs is middleware.
app.use(hbs.middleware({
  viewPath: __dirname + '/views',
  layoutsPath: __dirname + '/views/layouts',
  defaultLayout: 'main'
}));

app.use(function*() {
  if (this.request.path === '/') {
    yield this.render('discover');
  }
  else if (this.request.path === '/search') {
    yield this.render('search');
  }
});

app.listen(3000);
