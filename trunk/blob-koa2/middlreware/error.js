const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const util = require('util')
const verify = util.promisify(jwt.verify)
const statusCode = require('../util/status-code')

/**
 * 判断token是否可用
 */
module.exports = function () {
    return async function (ctx, next) {
        console.log("ctxurl==",ctx.url)
        const pathArray = ["/api/v1/user/login", "/api/v1/user/register","/file/uploadfile","upload"];
        let target = pathArray.filter(item => item == ctx.url || ctx.url.indexOf(item)>=0);
        if (target.length ==0) {
            try {
                let  token = ctx.request.header.authorization.split("Bearer ")[1]  // 获取jwt
                if (token) {
                    let payload
                    try {
                        payload = await verify(token.split(' ')[1], secret.sign)  // 解密payload，获取用户名和ID
                        ctx.user = {
                             name: payload.name,
                            id: payload.id
                        }
                    } catch (err) {

                        err.status = 401;
                        ctx.body = statusCode.ERROR_401('token verify fail');
                    }
                }
                await next()
            } catch (err) {

                if (err.status === 401) {
                    ctx.status = 401;
                    ctx.body = statusCode.ERROR_401('unauthorized，请求需要用户的身份认证！');
                } else {

                    err.status = 404;
                    ctx.body = statusCode.ERROR_404('不存在的用户');
                }
            }
        }else{
            await next()
        }
    }
}
