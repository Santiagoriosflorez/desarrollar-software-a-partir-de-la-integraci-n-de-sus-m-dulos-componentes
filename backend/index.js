const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const cookieParser= require('cookie-parser')
const {moongose}= require('./database')


const user =require('./routes/user_routes')
const places= require('./routes/places.routes')
 // Asegúrate de que la ruta al archivo de configuración de la base de datos sea correcta.

app.set('port', process.env.PORT || 4000);
app.use(cors({ origin: 'http://localhost:3000',credentials:true}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


// Asigna las rutas para el modelo de usuario
//app.use('/api/usuarios', require('./routes/user'));
app.use("/api",user)
app.use("/api",places)
// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto', app.get('port'));
});
