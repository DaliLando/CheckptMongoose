const mongoose = require ("mongoose");

const newUser = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods:[String]
})

module.exports = mongoose.model("Person",newUser)