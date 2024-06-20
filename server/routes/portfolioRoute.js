const express=require("express");
const router=express.Router()

const {portfolioPage1, portfolioPage2,
    portfolioPage3, portfolioPage4,
     portfolioPage5, portfolioPage6, 
     portfolioPage7, portfolioPage8,
      portfolioPage9, portfolioPage10} = require("../controllers/indexController")

router.get("/1",(req,res)=>{
   portfolioPage1(req,res);
})

module.exports=router


module.exports=router
