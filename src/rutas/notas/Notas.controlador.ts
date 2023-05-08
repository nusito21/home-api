import { RequestHandler } from 'express';
import Nota from './Nota'
export const tomarNota: RequestHandler = async (req, res) =>{ 
    
    const Notas = await Nota.find();
    res.json(Notas); 
};

export const tomarNotas: RequestHandler = async (req, res) =>{
    const id = req.params.id;
    const nota = await Nota.findById(id);
    res.json(nota); 
};

export const crearNota: RequestHandler = async (req, res) =>{ 
    const buscarNota = await Nota.findOne({descripcion: req.body.descripcion});
    if (buscarNota){
        return res.status(301).json({mensaje: 'Esta Nota ya existe'});
    }

    const nota = new Nota(req.body);
    const Notaguardado = await nota.save()
    res.json(Notaguardado)
};

export const actulizarNota: RequestHandler = async (req, res) =>{ 
    
    const actuNota = await Nota.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(actuNota);

}

export const eliminarNota: RequestHandler = async (req,res) =>{ 
    
        await Nota.findByIdAndRemove(req.params.id);
        res.json({status: 'eliminar Nota'})
      }
    

