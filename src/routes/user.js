const express = require('express')
const router = express.Router();


const userController = require('../app/controller/UserController')

router.get('/information',userController.userInformation)
router.post('/demo',userController.demo)
router.get('/customSuccess',userController.customSuccess)
router.get('/updateId',userController.updateId)
router.get('/:id/cart',userController.userCart)
router.get('/updateCart',userController.updateCart)




module.exports = router;