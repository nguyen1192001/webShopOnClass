const Product = require('../models/Product')
const Cart = require('../models/Cart')
const CustomInfomation = require('../models/CustomInfomation ')
const listAdmin = require('../models/listAdmin')
const { mutilleMpngooseToObject } = require('../../until/moongse')
const {mongooseToObject} =  require('../../until/moongse')
const { db } = require('../models/Product')

class SiteController {
    index(req, res, next) {
        res.render('home')
    }
    admin(req, res, next) {
        Product.find({})
            .then(product => {
                res.render('admin', {
                    product: mutilleMpngooseToObject(product)
                })
            })
            .catch(next)
    }
    customer(req, res, next) {
        Product.find({})
            .then(product => {
                res.render('customer', {
                    product: mutilleMpngooseToObject(product)
                })
            })
            .catch(next)
    }
    detailCart(req,res,next){
        CustomInfomation.find({})
        .then(data => {
            res.render('user/cart', {
                data: mutilleMpngooseToObject(data)
            })
        })
        .catch(next)
    }
    updateCount(req,res,next){
        let dem = req.body.count-1+2;
        if(req.body.flag==='plus'){
            dem =req.body.count-2+1;
        }
         dem = dem>0 ? dem : 0;

        CustomInfomation.updateOne({_id : req.params.id},{count : dem}).then(()=>{
            res.redirect('back')
        }).catch(next)
    }


    // [DELETE] /:id for Cart
    deleteCart(req,res,next){
        Cart.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }
        // [DELETE] /:id for CustomInformation

    deleteCustomInformation(req,res,next){
        CustomInfomation.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

    // [Delete ] /deleteAllCollection
    deleteAllCollection(req,res,next){
        alert('hien ra di')
        db.collection('CustomInfomation').drop()    // treen stack chi viet d ma sao đ đc + lưu thêm xuống cart nó đ lưu lại ở cuscomeinfomation
        .then(() => res.redirect('/user/information'))
        .catch(next)
    }
    // [post] /CHECKPASSWORD
    CheckPassword(req,res,next){
        listAdmin.findOne({}).then((data)=>{
            let iddata = mongooseToObject(data).admin1
            if(iddata ==req.body.checkPassword){
                res.redirect('admin')
            }else {
                alert("sai mật khẩu!!")
            }
        }).catch()
    }
}
module.exports = new SiteController