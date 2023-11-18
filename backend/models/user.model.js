const moongoose=require('mongoose');

const UserSchema= new moongoose.Schema({
    email:{type:String,require:true,trim:true,unique:true},
    password:{type:String,require:true},
    rol:{type:String,require:true},
});

module.exports=moongoose.model('Usuarios',UserSchema);