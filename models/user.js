const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-Local-Mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    }
    // passport-Local-Mongoose automatically define username, hashing, salting, password
}) 
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
