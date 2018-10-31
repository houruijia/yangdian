const express = require('express')  //node.js的框架
const app = express()     
var homeJson = require('./src/datas/Home.json')
var apiRoutes = express.Router()  //后端的路由
app.use('/api', apiRoutes) 
module.exports = {
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    },
    devServer: {
        before(app) {
            app.get('/api/homeJson', function(req, res){
                res.json({
                    errno: 0,
                    data: homeJson
                })
            })
        },
        host: '0.0.0.0',
        port: 8080
    }
}