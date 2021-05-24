const express = require('express')
const router = express.Router();


const meController = require('../app/controller/MeController')

router.get('/store/product',meController.storeProduct)
router.get('/store/customer',meController.storeCustomer)


module.exports = router;