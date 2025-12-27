const jwt = require("jsonwebtoken");
const { use } = require("react");

exports.loginUser = (req,res)=>{
    const{username,password} = req.body;

    if(username === "admin123" && password==="1234"){
        const token = jwt.sign(
            {username:"admin123",role:"admin"},
            "secretkey",
            {expiresIn: "1hr"}
        )
        res.json({token})
    }else{
        res.status(401).json({message:"invalid credentials"})
    }

}

exports.profile = (req,res)=>{
    res.json({
        message: "profile accessed",
        user:req.user
    })
}

exports.adminData =(req,res)=>{
    res.json({message:"welcome admin"})
}