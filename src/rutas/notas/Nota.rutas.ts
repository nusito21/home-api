import { Router } from "express";
import * as NotaCtrl from "./Notas.controlador";
const router = Router();

router.get('/nota', NotaCtrl.tomarNota );

router.get('/nota/:id', NotaCtrl.tomarNotas );

router.post('/nota', NotaCtrl.crearNota);

router.delete('/nota/:id', NotaCtrl.eliminarNota);

router.put('/nota/:id', NotaCtrl.actulizarNota);

export default router;