import express from "express"; // importamos express
import { calcularVelocidad, calcularDistancia, calcularTiempo, calcularFuerza, calcularPeso, calcularEnergiaCinetica } from "../controllers/fisica.controllers.js";
import { validarVelocidad, validarDistancia, validarTiempo, validarFuerza, validarPeso, validarEnergiaCinetica } from "../middlewares/fisica.middlewares.js";

const router = express.Router(); // asignamos a la constante router la funcion Router() de la liberia de express

// MOVIMIENTO
router.post("/velocidad", validarVelocidad, calcularVelocidad); // definimos una ruta con datos de entrada y las funciones a ejecutar
router.post("/distancia", validarDistancia, calcularDistancia);
router.post("/tiempo", validarTiempo, calcularTiempo);
// DINÁMICA 
router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/peso", validarPeso, calcularPeso);
// ENERGÍA
router.post("/energiaCinetica", validarEnergiaCinetica, calcularEnergiaCinetica);
// post es par que el sistema reciba algo 

export default router;