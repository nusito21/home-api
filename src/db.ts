import mongoose, { ConnectOptions } from "mongoose";
const uri = 'mongodb+srv://inu:Bruno123*@cluster0.gufp8dz.mongodb.net/test';



(async () => {
    try{
        const db =  await mongoose.connect(uri);
        console.log('conectado a la base de datos:'+ db.connection.name);
    }catch(error){
        console.log(error);
    }
    
  


})()



module.exports = mongoose;