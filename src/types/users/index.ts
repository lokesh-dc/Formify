import mongoose from 'mongoose'

export interface UserDoc extends mongoose.Document {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
}
