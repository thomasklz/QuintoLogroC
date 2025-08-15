
import express from 'express'
import { sequelize } from './db/conexion.js';



const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//app.use('/api', RouterVentas);

const main= async () =>{
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: false }); // Cambiar a true si se desea reiniciar la base de datos
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
      })
  } catch (error) {
      sequelize.close()
      console.error(`Error ${error}`);
  }
}
main();