const {Schema}=require('mongoose')
const bcrypt = require("bcryptjs");

const UserSchema=new Schema({
    name:String,
    email:String,
    password:String,
    createdAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports= {UserSchema}