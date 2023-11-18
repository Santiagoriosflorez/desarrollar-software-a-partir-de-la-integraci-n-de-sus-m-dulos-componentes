const express = require('express');
const router = express.Router();
const {login,register, logout}=require('../controllers/auth.controller');

const validateSchema = require('../middlewares/validator.middleware');
const {registerSchema,loginSchema} = require('../schemas/auth.schema');

router.post ('/login',validateSchema(loginSchema),login)

router.post('/register',validateSchema(registerSchema),register)

router.post('/logout',logout)


module.exports = router;



