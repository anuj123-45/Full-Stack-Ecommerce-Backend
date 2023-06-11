const express=require('express');
const { getAllProducts ,createProduct, updateProduct, deleteProduct, getSpecificProduct } = require('../controllers/productContoller');


const router=express.Router();



router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/update/:id").put(updateProduct).delete(deleteProduct).get(getSpecificProduct);


module.exports=router;