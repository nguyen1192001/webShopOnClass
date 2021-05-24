const Product = require('../models/Product')
const Cart = require('../models/Cart')
const { mutilleMpngooseToObject } = require('../../until/moongse')


class MeController {
  
    // [GET] /me/store/product
    storeProduct(req, res, next) {
        Product.find({})
            .then(product => {
                res.render('me/store-product', {
                    product: mutilleMpngooseToObject(product)
                })
            })
            .catch(next)
    }
      // [GET] /me/store/customer

    storeCustomer(req, res, next){
        Cart.find({})
        .then(cart => {
            res.render('me/listCustomer', {
                cart: mutilleMpngooseToObject(cart)
            })
        })
        .catch(next)
    }
}
module.exports = new MeController