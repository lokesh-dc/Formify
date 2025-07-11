import { Schema, models, model } from 'mongoose'
import type { FormDoc } from '@/types/forms'

const ValidationSchema = new Schema({
    type: String,
    pattern: String,
    minLength: Number,
    maxLength: Number,
    customRule: String,
}, { _id: false })

const FieldSchema = new Schema({
    type: { type: String, required: true },
    label: String,
    name: String,
    required: Boolean,
    options: [String],
    isRequired: Boolean,
    placeholder: String,
    validation: ValidationSchema
}, { _id: false })

const FormsSchema = new Schema<FormDoc>({
    title: { type: String, required: true },
    description: String,
    fields: [FieldSchema],
})

const Forms = (models.Forms as any) || model('Forms', FormsSchema)
export default Forms
