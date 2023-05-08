import { RequestHandler } from 'express';
import Check from './check'
export const tomarCheck: RequestHandler = async (req, res) =>{ 
    
    const Checks = await Check.find();
    res.json(Checks); 
};

export const tomarChecks: RequestHandler = async (req, res) =>{
    const id = req.params.id;
    const check = await Check.findById(id);
    res.json(check); 
};

export const crearCheck: RequestHandler = async (req, res) =>{ 
    const buscarCheck = await Check.findOne({descripcion: req.body.descripcion});
    if (buscarCheck){
        return res.status(301).json({mensaje: 'Este Check ya existe'});
    }

    const check = new Check(req.body);
    const Checkguardado = await check.save()
    res.json(Checkguardado)
};

export const actulizarCheck: RequestHandler = async (req, res) =>{ 
    
    const actuCheck = await Check.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(actuCheck);

}

export const eliminarCheck: RequestHandler = async (req,res) =>{ 
    
        await Check.findByIdAndRemove(req.params.id);
        res.json({status: 'Check eliminado'})
      }
    

