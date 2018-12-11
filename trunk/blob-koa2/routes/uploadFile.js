const router = require('koa-router')()
const fs = require('fs');
const path=require("path");

router.prefix('/file')
router.post('/uploadfile', async (ctx, next) => {
    console.log("ctx==",ctx.request.files);
    // // 上传单个文件
     const file = ctx.request.files.file; // 获取上传文件
    // // 创建可读流
    // const reader = fs.createReadStream(file.path);
    // let filePath = path.join(__dirname, 'public/upload1/') + `/${file.name}`;
    // // 创建可写流
    // const upStream = fs.createWriteStream(filePath);
    // // 可读流通过管道写入可写流
    // reader.pipe(upStream);
    if(file.path){
        let arr=file.path.split("upload\\");
        return ctx.body = {filePath:'/upload/'+arr[1]};
    }
  });


module.exports = router