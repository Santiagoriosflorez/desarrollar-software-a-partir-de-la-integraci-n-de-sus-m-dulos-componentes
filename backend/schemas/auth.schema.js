const {z } =require('zod')


const validRoles=["user","admin"]

const registerSchema= z.object({

    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Email is not valid',
    }),
    password:z.string({
        required_error:'Password is required'
    }).min(6,{
        message:'Password must be at least 6 characters'
    }),

    rol: z.string({
        required_error:"Rol is required"
    }).refine((value) => {
        return validRoles.includes(value); // Verifica que el valor esté en la lista de roles permitidos
    }),
});


const loginSchema =z.object({
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Email is not valid'
    }),
    password:z.string({
        required_error:'Password is required'
    }).min(6,{
        message:'Password must be at least 6 characters'
    }),
    rol: z.enum(["user", "admin", "editor"]).default("user")
});

module.exports = { registerSchema, loginSchema };
