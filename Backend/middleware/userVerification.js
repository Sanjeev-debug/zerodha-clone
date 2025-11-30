require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");
const MyError = require("../MyError");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      
       throw new MyError(404, "you are not logged in");
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        throw new MyError(404, "you are not logged in");
      } else {
        const user = await UserModel.findById(decoded.id);

        if (!user) {
          throw new MyError(404, "you are not logged in");
        }

        req.user = user; 
        next(); 
      }
    });
  } catch (error) {
    next(error)  
  }
};

module.exports =  userVerification ;