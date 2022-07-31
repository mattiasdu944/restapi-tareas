import { Router } from "express";
import { createIntervalo, deleteIntervalo, getIntervalos, updateIntervalo } from "../controllers/intervalos.controllers.js";

const router = Router();

router.get("/intervalos", getIntervalos);

router.post("/intervalos", createIntervalo);

router.put("/intervalos/:id", updateIntervalo);

router.delete("/intervalos/:id", deleteIntervalo);

export default router;