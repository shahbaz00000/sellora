const Product = require("../models/productModel");
const User = require("../models/userModel");
 
//  Product create Contoller
exports.createProduct = async(req,res,next)=>{
    const {title,description,brand,price,category,rating} = req.body;
    const sellerId = req.userId;
    const image = req.file.filename;
    try{
        const product = await new Product({title,description,brand,image,price,category,rating,seller:sellerId});
        await product.save();
        
        const user = await User.findById(sellerId);
        user.product.push(product._id);
        await user.save();
        res.status(201).json({message:"producct created successfully",product});
    }catch(error){
        res.status(501).json({errorMessage:error.message});
    }
}
// Product Gets Controler
exports.getProduct = async(req,res,next)=>{
    const sellerId = req.userId;
    try{
       const products = await Product.find({seller:sellerId});
       console.log(products);
       if(!products){
        return res.status(500).json({errorMessage:"there is no product "})
       }
       res.status(200).json({message:"product get successfully",products});
    }catch(error){
      res.status(500).json({errorMessage:error.message});
    }
}