let express=require('express');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
//创建服务器
let app=express();

//开启服务器并监听端口
app.listen(8090,function(){
    console.log('this express server is running at http://127.0.0.1:8090 ');
})

//注册app中间件use,可处理get和post请求
app.use(function(req, res, next){
   res.set({
     'Access-Control-Allow-Origin': '*'
   })
   next()
})


//注册get请求中间键
app.get('/slider/list',function(req,res){
    //服务器回应数据
    // res.send('这是主页面的内容')
    res.json({
      "code": 200,
      "message": "OK",
      "err": 0,
      "data": [
        {
          "id": Math.random(),
          "url": 'https://img.yzcdn.cn/vant/apple-1.jpg',
        },
        {
          "id": Math.random(),
          "url": 'https://img.yzcdn.cn/vant/apple-2.jpg',
        },
        {
          "id": Math.random(),
          "url": 'https://img.yzcdn.cn/vant/apple-3.jpg',
        },
        {
          "id": Math.random(),
          "url": 'https://img.yzcdn.cn/vant/apple-4.jpg',
        },
        
      ]
    }); //返回json内容
    // let query =req.query;   //get请求传入的查询参数中对应键的值
})


