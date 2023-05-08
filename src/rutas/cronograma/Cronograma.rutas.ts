import { Router } from "express";
import * as CronogramaCtrl from "./Cronograma.controlador";
const router = Router();

router.get('/cronograma', CronogramaCtrl.tomarCronograma );

router.get('/cronograma/:id', CronogramaCtrl.tomarCronogramas );

router.post('/cronograma', CronogramaCtrl.crearCronograma);

router.delete('/cronograma/:id', CronogramaCtrl.eliminarCronograma);

router.put('/cronograma/:id', CronogramaCtrl.actulizarCronograma);

export default router;