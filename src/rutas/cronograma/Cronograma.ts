import { Schema, model } from 'mongoose'

const cronogramaSchema = new Schema ({

    descripcion: { type: String, trim: true },
    fechaentrega: { type: Date, trim:true},
    fechainicio: { type: Date, trim:true},
    fechafin: { type: Date, trim:true}

    
}, {
    versionKey: false,
    timestamps: true

})

export default model('Cronograma', cronogramaSchema);