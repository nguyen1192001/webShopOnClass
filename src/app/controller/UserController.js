const Product = require('../models/Product')
const CustomInfomation = require('../models/CustomInfomation ')
const Cart = require('../models/Cart')

const { mongooseToObject } = require('../../until/moongse')
const { mutilleMpngooseToObject } = require('../../until/moongse')
const { move } = require('../../routes/user')



class UserController {

    userInformation(req, res, next) {
        CustomInfomation.findOne({}).then().catch()
        res.render('user/information')
    }

    // [POST+PUT]/detai
    userCart(req, res, next) {
        Product.findById(req.params.id)
            .then((product) => {
                const data = mongooseToObject(product);
                data.count = 1;
                const cus = new CustomInfomation(data);
                 cus._id = cus._id+Math.random();
                CustomInfomation.updateOne({ _id: data._id })
                cus.save()
                res.redirect('/detailCart')
            })
            .catch(next)

    }

    updateId(req, res, next) {

        let str = req.url;
        let id = str.slice(str.lastIndexOf("?=") + 2);
        CustomInfomation.updateMany({}, { newId: id }).then((data) => {
             res.redirect('/user/updateCart')
            // res.send("updateId")
            
        }).catch(next)

    }


    demo(req, res, next) {
        const fromData = { ...req.body }
        const cart = new Cart(fromData)
        // res.json(cart)
        cart._id = Math.random();
        cart.save()
        //.then(()=>{res.send('ok')})
             .then(() => res.redirect(`/user/updateId?=${cart._id}`))
            .catch(error => {
                res.send("errordemo")
            })

    }
    updateCart(req, res, next) {
        CustomInfomation.find({})
            .then(customInfomation => {
                const movedata = mutilleMpngooseToObject(customInfomation)
                movedata.forEach(data => {
                    // res.json(data);
                    let cart = new Cart(data)
                    cart.save()
                })
            })
            .catch(next)
        CustomInfomation.deleteMany({}).then(()=>{
            res.redirect('/user/customSuccess')
        })
    }
    customSuccess(req, res, next){
        res.render('user/demo')
    }
}
module.exports = new UserController