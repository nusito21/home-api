import { RequestHandler } from 'express';
import Cronograma from './Cronograma'
export const tomarCronograma: RequestHandler = async (req, res) =>{ 
    
    const Cronogramas = await Cronograma.find();
    res.json(Cronogramas); 
};

export const tomarCronogramas: RequestHandler = async (req, res) =>{
    const id = req.params.id;
    const cronograma = await Cronograma.findById(id);
    res.json(cronograma); 
};

export const crearCronograma: RequestHandler = async (req, res) =>{ 
    const buscarCronograma = await Cronograma.findOne({descripcion: req.body.descripcion});
    if (buscarCronograma){
        return res.status(301).json({mensaje: 'Este Cronograma ya existe'});
    }

    const cronograma = new Cronograma(req.body);
    const Cronogramaguardado = await cronograma.save()
    res.json(Cronogramaguardado)
};

export const actulizarCronograma: RequestHandler = async (req, res) =>{ 
    
    const actuCronograma = await Cronograma.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(actuCronograma);

}

export const eliminarCronograma: RequestHandler = async (req,res) =>{ 
    
        await Cronograma.findByIdAndRemove(req.params.id);
        res.json({status: 'eliminar Cronograma'})
      }
    

