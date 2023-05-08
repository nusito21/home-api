import { Schema, model } from 'mongoose'

const checkSchema = new Schema ({

    descripcion: { type: String, trim: true },
    tipo: {type: String, trim: true}

    
}, {
    versionKey: false,
    timestamps: true

})

export default model('Check', checkSchema);