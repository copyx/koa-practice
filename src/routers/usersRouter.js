const Router = require('@koa/router');
const router = new Router();

router.get('/:id', (ctx) => {
  ctx.body = `User ${ctx.params.id}'s page`;
});

module.exports = router;
