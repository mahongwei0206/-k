const express=require('express');
const bodyparser=require('body-parser');
const mysql=require('mysql');
const app=express();
app.use(bodyparser.urlencoded());
var pool=mysql.createPool({
	host:'localhost',
	password:'123456',
	user:'root',
	database:'kecheng'
})
app.use('/cha',(req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	    pool.query(`SELECT * FROM kebiao`,(err,rows)=>{
	    if(err) throw err;
          res.send(rows)
	})
})
app.use('/gai',(req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	    pool.query(`UPDATA kebiao SET`,(err,rows)=>{
	    if(err) throw err;
          res.send(rows)
	})
})



app.listen(8002,function(){
	console.log('正常运行')
});
 