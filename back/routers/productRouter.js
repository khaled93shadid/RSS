const express = require('express')
const {getAllproducts,createProduct,updateproduct,deleteProduct,getproductbyname} =require('../controllers/productController')

const router = express.Router();

router.get('/products',getAllproducts)
router.get('/getproductbyname', getproductbyname)
router.post('/createProduct',createProduct)
router.put('/updateproduct/:id',updateproduct)
router.delete('/deleteProduct/:id',deleteProduct)


module.exports=router;

