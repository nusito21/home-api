import { Schema, model } from 'mongoose'

const NotaSchema = new Schema ({

    descripcion: { type: String, trim: true }

    
}, {
    versionKey: false,
    timestamps: true

})

export default model('Nota', NotaSchema);