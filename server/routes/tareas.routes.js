import { Router } from "express";
import { getTareas, createTarea, getTarea, updateTarea, deleteTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.get('/tareas', getTareas);

router.get('/tareas/:id', getTarea);

router.post('/tareas', createTarea);

router.put('/tareas/:id', updateTarea)

router.delete('/tareas/:id', deleteTarea)

export default router;