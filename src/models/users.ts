import { Schema, models, model } from 'mongoose'
import type { UserDoc } from '@/types/users'

const UsersSchema = new Schema<UserDoc>({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
})

UsersSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    },
});
const Users = (models.Users as any) || model('Users', UsersSchema)
export default Users;
