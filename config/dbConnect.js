const mongoose = require ("mongoose");


const cnx = async ()=> {
   await mongoose.connect(process.env.MONGO_URI)
   .then (()=> {
    console.log('Database connected successfuly');
   })
   .catch ((err)=> {
    console.error(err);
   })
}

module.exports = cnx;