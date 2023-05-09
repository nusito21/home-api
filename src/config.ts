import dotenv from 'dotenv'

dotenv.config()



export default {
 

  DB_URI : process.env.DB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gufp8dz.mongodb.net/test`
}