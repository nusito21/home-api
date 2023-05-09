import mongoose, { ConnectOptions } from "mongoose";
import config from './config';



const uri  = config.DB_URI ;



(async () => {
    try{
        const db =  await mongoose.connect(uri);
        console.log('conectado a la base de datos:'+ db.connection.name);
    }catch(error){
        console.log(error);
    }
    
  


})()



module.exports = mongoose;