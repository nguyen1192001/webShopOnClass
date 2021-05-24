const express = require('express')
const router = express.Router();


const productController = require('../app/controller/ProductController')

router.get('/create',productController.create)
router.post('/store',productController.store)
router.get('/:id/edit',productController.edit)
router.put('/:id',productController.update)
router.delete('/:id',productController.forcedestroy)
module.exports = router;