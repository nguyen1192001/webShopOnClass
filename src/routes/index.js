const siteRouter = require('./site')
const productRouter = require('./product')
const meRouter = require('./me')
const userRouter = require('./user')

function route(app){
    
    app.use('/user',userRouter)
    app.use('/me',meRouter)
    app.use('/product',productRouter)
    app.use('/',siteRouter)
      
}
module.exports = route;
