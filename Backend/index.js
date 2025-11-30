require('dotenv').config();


const express=require('express')
const app=express();
const mongoose= require('mongoose');
const PORT=process.env.PORT || 3000;
const uri=process.env.MONGO_DB;
const { createSecretToken } = require("./util/SecretToken.js");
const bcrypt = require("bcryptjs");
const bodyParser=require('body-parser')
const cors =require('cors')
const cookieParser = require("cookie-parser");
const userVerification=require('./middleware/userVerification.js')
const MyError =require('./MyError.js')


app.use(cors({
  origin: ["https://zerodha-clone-1-5grb.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

const {HoldingsModel}=require("./model/HoldingsModel.js");
const {PositionsModel}=require("./model/PositionsModel.js");
const {OrdersModel}=require("./model/OrdersModel.js");
const {UserModel}=require("./model/UserModel.js");
const passport = require('passport');

const Main=async()=>{
    try{
       await mongoose.connect(uri)
    }catch(err){
         throw new MyError(404, "Mongo-Db not connected");
    }
}
Main().then(()=>{console.log("Mongo-DB connected")}).catch((err)=>{console.log(err)});

// app.get("/addHoldings",async(req,res)=>{
//     let tempHoldings= [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ]
     
//  tempHoldings.forEach((item)=>{
//    let newHolding=new HoldingsModel({
//      name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//    });
//    newHolding.save();
//  })

//     res.send('done')
// })

// app.get("/addPositions",async(req,res)=>{
//     let tempPositions= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
     
//  tempPositions.forEach((item)=>{
//    let newPositions=new PositionsModel({
//     product:item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//    });
//    newPositions.save();
//  })

//     res.send('done')
// })

app.get("/allHoldings",userVerification,async(req,res,next)=>{
  
  try{
     let allHoldings=await HoldingsModel.find()
       if (!allHoldings || allHoldings.length === 0) {
      throw new MyError(404, "No holdings found");
    }
     res.json({data:allHoldings,message:'All Holdings',status:true});
  }catch(err){
     next(err)
  }
 
});
app.get("/allPositions",userVerification,async(req,res,next)=>{
  try{
      let allPositions=await PositionsModel.find()
       if (!allPositions || allPositions.length === 0) {
      throw new MyError(404, "No Positons found");
    }
      res.json({data:allPositions,message:'All Positions',status:true});
  }catch(err){
      next(err)
  }
  
});
app.get('/allOrders',userVerification,async(req,res,next)=>{
  try{
      let allOrders= await OrdersModel.find();
        if (!allOrders || allOrders.length === 0) {
        throw new MyError(404, "No Orders found");
    }
      res.json({data:allOrders,message:'All Orders',status:true})
  }catch(err){
      next(err)
  }
  
})
app.post('/newOrder',userVerification,async(req,res,next)=>{
  try{
        let newOrder=new OrdersModel({
        name: req.body.name,
        qty:  req.body.qty,
        price:  req.body.price,
        mode: req.body.mode,
       })
       newOrder.save();
       res.json({message:'Order Save successfully',status:true});
  }catch(err){
      next(err)
  }
  
});
app.post('/newUser',async(req,res,next)=>{
  try{
        console.log(req.body)
        const existingUser= await UserModel.findOne({email:req.body.email})
        if (existingUser) {
        throw new MyError(500,"User already exist")
        }
        let newUser=new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
        });
        // console.log(newUser);
        newUser.save();
        const token = createSecretToken(newUser._id);
        res.cookie("token", token, {
        httpOnly: false,  // agar React me access karna hai
        secure: true,
        sameSite: "none",
        maxAge: 24*60*60*1000
       });

       console.log('userSave');
       res.json({message:'User craeted successfully',status:true});
  }catch(err){
    next(err)
  }
 
});
app.post('/userLogin',async(req,res,next)=>{
    try{
      const { name, password } = req.body;
      console.log(name)
    if(!name || !password ){
      
         throw new MyError(404, "All fields are required");
    }
    const user = await UserModel.findOne( {name} );
    // console.log(user)
    if(!user){
      
      throw new MyError(404, "Incorrect password or email");
      
    }
    const auth = await bcrypt.compare(password,user.password);
    console.log(auth)
    if (!auth) {
       throw new MyError(404, "Incorrect password or email"); 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
        httpOnly: false,  // agar React me access karna hai
        secure: true,
        sameSite: "none",
        maxAge: 24*60*60*1000  
     });
     res.json({data:user,message:"User logged-in successfully",status:true});
    }catch(err){
      next(err)
    }
    
});



app.all(/.*/,(req,res,next)=>{
    next(new MyError(404 , "Page Not Found"))
});

app.use((err,req,res,next)=>{
    let {status=500,message="something went  wrong"}=err;
    console.log(message,status);
    res.status(status).json({message:message,status:false});
    
});

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
});