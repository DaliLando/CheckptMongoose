const User = require("../model/UserSchema")
// fonction pour créer un utilisateur 
const create = async (req,res) => { 
   await User.insertMany ([
    { name:"Dali", age:23, favoriteFoods:["CousCous","makloub"]},
    { name:"Ahmed", age:19, favoriteFoods:["Mlewi","Tajin"]},
    { name:"Ahlem", age:26, favoriteFoods:["Pathé","Soufflet"]}
   ])
   .then ((doc)=>{
    res.status(200).json({msg:"Insertion into Database successful",doc});
   })
   .catch ((err)=>{
    res.status(500).json({msg:"error during insertion",err});
   })
}

// Requête pour chercher un doc
const find = async (req,res)=> { 
    await User.find({name:"Dali"})
    .then ((doc)=>{
        res.status(200).json({msg:"Results found :", doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"no result found",err});
    })
}
// Requete pour chercher un élément spécifique
const findO = async (req,res)=> { 
    await User.findOne({favoriteFoods:"Soufflet"})
    .then ((doc)=>{
        res.status(200).json({msg:"Results found :", doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"no result found",err});
    })
}
const findId = async (req,res)=> { 
    let {id}=req.params;
    await User.findById(id)
    .then ((doc)=>{
        res.status(200).json({msg:"Results found :", doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"no result found",err});
    })
    
}
// Requête pour modifier ou ajouter une valeur
const update = async (req,res)=> { 
    
    await User.updateOne({_id:"665ede990e01f33692c85fac"},{$push:{favoriteFoods:"Hamburger"}})
    .then ((doc)=>{
        res.status(200).json({msg:"Update Complete :", doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"An error occured",err});
        console.log(err);
    })
    
}
/// 2eme methode pour mettre a jour doc
const update2 = async (req,res)=> { 
    
    await User.findOneAndUpdate({name:"Marco"},{$set:{age:20}},{new:true})
    .then ((doc)=>{
        res.status(200).json({msg:"Update Complete :", doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"An error occured",err});
        console.log(err);
    })
    
}
// Supression d'un doc 
const supp = async (req,res)=> { 
    let {id}=req.params;
    await User.findByIdAndDelete(id)
        .then (()=>{
        res.status(200).json({msg:"Delete Complete :"})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"An error occured",err});
        console.log(err);
    })
    
}
 
// Supression de plusieurs docs
const suppMany = async (req,res)=> { 
    let {name}=req.params;
    await User.deleteMany({name:name})
        .then (()=>{
        res.status(200).json({msg:"Delete Complete :"})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"An error occured",err});
        console.log(err);
    })
    
}

/// Enchainement de requêtes 
const chain = async (req,res)=> { 
    await User.find({favoriteFoods:"Soufflet"}).sort({name:1}).limit(2).select('-age').exec()
        .then ((doc)=>{
        res.status(200).json({msg:": Search Result",doc})
    })
    .catch ((err)=>{
        res.status(500).json({msg:"An error occured",err});
        console.log(err);
    })
    
}
module.exports = {create,find,findO,findId,update,update2,supp,suppMany,chain}