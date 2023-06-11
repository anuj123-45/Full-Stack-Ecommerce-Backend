const mongoose=require('mongoose');

const Product = require('../models/productModel');




// create  product

exports.createProduct = async (req, res, next) => {

  try{
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
}
catch(err){
  return res.json({error:err});
}

}





// get all products 


exports.getAllProducts = async (req, res) => {
  try{
  const products = await Product.find();
  res.status(200).json({ succes: true, products });
  }
  catch(err){
    return res.json({error:err});
  }
}


// update product -- Admin

exports.updateProduct = async (req, res,next) => {
  
  try{

  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found"
    })
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,

  })

  res.status(200).json({ success: true, product });
  }
  catch(err){
    return res.json({error:err});
  }
}

// delete route

exports.deleteProduct=async(req,res)=>{
  try{
  const product=await Product.findOneAndDelete({_id:req.params.id});
  if(!product){
    return res.status(500).json({success:false,message:"Product not exists"});
  }

  else {
    return res.status(200).json({success:true,message:"Product deleted successfully"});
  }
}
catch(err){
  return res.json({error:err});
}

}

// get product details   (specific)

exports.getSpecificProduct=async(req,res)=>{

  try{

  const product=await Product.findById(req.params.id);
  
  if(!product){
    return res.status(500).json({success:false,message:"Product not exists"});
  }

  else {
    return res.status(200).json({success:true,product});
  }
  }
  catch(err){
    return res.json({error:err});
  }

}