var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'19970818',
    database:'items',
    port:3306
}) 


app.post('/',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err)
            return
        }
        var sql = `select * from loupan where fenlie=${req.body.fenlie}`
        connection.query(sql,function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
})

app.get('/news/',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err)
            return
        }
        var sql = 'select * from xinwen'
        connection.query(sql,function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
})




app.listen(3000,function(){
    console.log('ok')
})