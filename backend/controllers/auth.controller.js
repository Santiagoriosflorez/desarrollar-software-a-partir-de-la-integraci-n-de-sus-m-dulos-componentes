const User= require('../models/user.model')
const bycrypt = require('bcryptjs')
const createAccessToken  = require('../libs/jwt');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET= require('../config')

module.exports.register= async (req,res)=>{
    const {email,password,rol}=req.body

  try {
    
    const passwordHash= await bycrypt.hash(password,10)
    const newUser = new User({
        email,
        password:passwordHash,
        rol
    })

    const userSaved=await newUser.save()

    const token= await createAccessToken({id:userSaved._id})
    res.cookie('token', token)
    res.json({
      id:userSaved._id,
      email:userSaved.email,
      rol:userSaved.rol
    })
  } catch (error) {
    res.status(500).json({message:error.message})
  }

};


module.exports.login= async (req,res)=>{
  const {email,password,rol}=req.body

try {

  const userFound=await User.findOne({email})
  
  if (!userFound) return res.status(400).json({message:"user not found"})
  
  const isMatch= await bycrypt.compare(password,userFound.password)

  if (!isMatch) return res.status(400).json({message:"incorrect password"});

  const token= await createAccessToken({id:userFound._id})


  res.cookie('token', token)
  res.json({
    id:userFound._id,
    email:userFound.email,
    rol:userFound.rol
  })
} catch (error) {
  res.status(500).json({message:error.message})
}

}

module.exports.logout =  (req,res)=>{
      res.cookie('token',"",{
        expires:new Date(0)
      })
      return res.sendStatus(200);
}


















/*const Usuarios = require('../models/user.model');
const userCtrl = {};

/**
 * DEFINO LOS M�TODOS  */

/*//Obtener todos los empleados
userCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuarios.find();
    res.json(usuarios);   
}                    

// Crear empleados

userCtrl.createUsuarios = async (req, res) => { 
   const usuarios = new Usuarios(req.body);
   await usuarios.save();    
   res.json({
       'status': 'Usuario guardado'
   });
}*/


//module.exports = userCtrl;

