const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
// Configuraciones del servior.
app.set('port',process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Routes
app.use(require('./routes/usuarios'));
app.use(require('./routes/productos'));
app.use(require('./routes/tiendas'));
 //para todas las rutas

// Creacion del puerto.
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto:', app.get('port'));
});