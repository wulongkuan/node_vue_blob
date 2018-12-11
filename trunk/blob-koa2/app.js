const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const betterBody=require('koa-better-body');
const koaBody = require('koa-body');
const jwt = require('koa-jwt')
const logger = require('koa-logger')
const cors = require('koa-cors');
const index = require('./routes/index')
const secret = require('./config/secret')
const err = require('./middlreware/error')
const convert=require('koa-convert');
const router=require("koa-router")();
const users = require('./routes/users')
const uploadFile=require('./routes/uploadFile')
const path=require("path");
// error handler
onerror(app)

app.use(convert(cors()));

// 过滤不用jwt验证
app.use(jwt({secret: secret.sign}).unless({
    path: [
        // 注册接口
        /^\/api\/v1\/user\/register/,
        // 登录接口
        /^\/api\/v1\/user\/login/,
        // 文章列表
        /^\/api\/v1\/article\/list/,
        //文件上传
        /^\/file\/uploadfile/,
        /^((?!\/api).)*$/ 
    ]
}))

  app.use(err())

// middlewares
// app.use(bodyparser({
//     enableTypes: ['json', 'form', 'text']
// }))

app.use(koaBody({
    multipart:true, // 支持文件上传
    // encoding:'gzip',
    formidable:{
      uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
      onFileBegin:(name,file) => { // 文件上传前的设置
      },
    }
  }));
app.use(json());
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes())
app.use(index.allowedMethods());
app.use(users.routes(), users.allowedMethods())
app.use(uploadFile.routes(), users.allowedMethods())
// router.get('/news',(ctx,next)=>{ ctx.body="新闻 page" })
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
