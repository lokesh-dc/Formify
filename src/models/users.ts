import { Schema, models, model } from 'mongoose'
import type { UserDoc } from '@/types/users'

const FormsSchema = new Schema<UserDoc>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
})

const Forms = (models.Forms as any) || model('Forms', FormsSchema)
export default Forms
