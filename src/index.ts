import app from './app';
import './db';

const PUERTO = process.env.PORT || 2000
app.listen(PUERTO, ()=>{
    console.log(`el servidor esta escuchando el puerto ${PUERTO}`)
})