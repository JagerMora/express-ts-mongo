import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

/**
 * mecanismo para importar rutas dinamicamente
 * consulta src/routes/index.ts
 */
import { router } from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

/**
 * activar cors y ejemplo de configuracion
 */
app.use(
	cors()
	// {
	//     origin: '*' -- permite todos los dominios
	//     origin: ['localhost:3000'] -- define whitelist
	// }
);

/**
 * para recibir datos mediante POST
 * en JSON mediante Body
 */
app.use(express.json());

/**
 * Middlewares
 */
// app.use(logMiddleware);

/**
 * hacer uso de las rutas
 */
app.use(router);

/**
 * conectar a la base de datos
 */
db().then(() => console.log("Conexion exitosa"));

/**
 * activar el puerto del servidor
 */
app.listen(PORT, () => console.log(`PORT: ${PORT}`));
