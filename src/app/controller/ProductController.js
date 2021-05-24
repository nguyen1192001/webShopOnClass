const Product = require('../models/Product')
const { mongooseToObject } = require('../../until/moongse')


class ProductController {
    // [GET] /product/create
    create(req, res, next) {
        res.render('products/create')
    }
    // [POST] /product/store
    store(req, res, next) {
        // const fromData = { ...req.body }
        //  res.json(fromData)
        const product = new Product(req.body)
        //  res.json(product)
         product.save()
            .then(() => res.redirect('/admin'))
            .catch(error => {
                res.send('error')
            })
    }

    //[GET]/ courser/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => {
                res.render('products/edit', {
                    product: mongooseToObject(product)
                })
            })
            .catch(next)
    }
    //[PUT]/ product/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/product'))
            .catch(next)
    }
    //[DELETE]/ product/:id
    forcedestroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

}
module.exports = new ProductController