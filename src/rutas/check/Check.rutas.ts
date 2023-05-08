import { Router } from "express";
import * as CheckCtrl from "./Check.controlador";
const router = Router();

router.get('/check', CheckCtrl.tomarCheck );

router.get('/check/:id', CheckCtrl.tomarChecks );

router.post('/check', CheckCtrl.crearCheck);

router.delete('/check/:id', CheckCtrl.eliminarCheck);

router.put('/check/:id', CheckCtrl.actulizarCheck);

export default router;