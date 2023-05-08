import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import notaRouter from './rutas/notas/Nota.rutas'
import cronogramaRouter from './rutas/cronograma/Cronograma.rutas'

const app = express();



app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use(notaRouter);
app.use(cronogramaRouter);

export default app;