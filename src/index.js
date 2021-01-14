const Koa = require('koa');
const Router = require('@koa/router');

const usersRouter = require('./routers/usersRouter');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'This is root';
});

router.use('/users', usersRouter.routes());

app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server start listening on port 3000');
});
