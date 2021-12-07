// Librerías utilizadas
const express = require("express");
const path = require("path");
const indexRoutes = require('./routes/routes.js');
const app = express();

// Configuración
app.set("port", 3030); //Puerto
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);
app.set("views", path.join(__dirname, "views")); //Necesario
app.set('view engine', 'ejs'); //Necesario
// app.engine('html', require('ejs').renderFile); //Necesario

// Rutas
app.use(indexRoutes);

// Despliegue del servidor
app.listen(app.get("port"), () => {
    console.log("Servidor UP");
})