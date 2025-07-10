// models/Post.ts
import mongoose from 'mongoose'

const FormsSchema = new mongoose.Schema({
    title: String,
    description: String,
    fields: [{
        type: String,
        label: String,
        name: String,
        required: Boolean,
        options: [String],
        isRequired: Boolean,
        placeholder: String,
        validation: {
            type: String,
            pattern: String,
            minLength: Number,
            maxLength: Number,
            custom: Function
        }
    }]
})

export default mongoose.models.Forms || mongoose.model('Forms', FormsSchema)
