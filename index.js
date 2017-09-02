'use strict';

const Koa = require('koa');
const mongo = require('koa-mongo');
const app = new Koa();

app.use(mongo({
    uri: 'mongodb://localhost:27017/centerupp',
    max: 100,
    min: 1
}));

// app.use(async (ctx, next) => {
//     ctx.set('Content-Type', 'application/json');
// });

app.use(async (ctx, next) => {
    ctx.body = await ctx.mongo.collection('user').find({}).toArray();
});

app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
});


app.listen(1337);


