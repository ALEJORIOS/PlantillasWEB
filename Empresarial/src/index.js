// Librerías utilizadas
const express = require("express");
const path = require("path");
const indexRoutes = require('./routes/routes.js');
const app = express();

// Configuración
app.set("port", 3000); //Puerto
app.use(indexRoutes); //Rutas
app.set("views", path.join(__dirname, "views")); //Necesario
app.set('view engine', 'html'); //Necesario
app.engine('html', require('ejs').renderFile); //Necesario



// Despliegue del servidor
app.listen(app.get("port"), () => {
    console.log("Servidor UP");
})