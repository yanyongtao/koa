const koa=require('koa');

const server=koa();

server.use(function* () {
    this.body="abc"
})

server.listen(8080);
