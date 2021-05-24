const express = require('express')
const router = express.Router();


const siteController = require('../app/controller/SiteController')
router.get('/',siteController.index)
router.post('/CheckPassword',siteController.CheckPassword)
router.get('/admin',siteController.admin)
router.get('/customer',siteController.customer)
router.get('/detailCart',siteController.detailCart)
router.put('/:id',siteController.updateCount)
router.delete('/:id',siteController.deleteCart)
router.delete('/deleteCustomInformation/:id',siteController.deleteCustomInformation)
router.delete('/deleteAllCollection',siteController.deleteAllCollection)

module.exports = router;