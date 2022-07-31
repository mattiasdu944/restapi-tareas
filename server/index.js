import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

import tareasRoutes from "./routes/tareas.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import intervalosRoutes from "./routes/intervalos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(tareasRoutes, categoriasRoutes, intervalosRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
