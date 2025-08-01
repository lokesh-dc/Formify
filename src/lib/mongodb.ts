import mongoose from 'mongoose'

const MONGODB_URI = process.env.NEXT_PUBLIC_API_MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

export default async function connectToDatabase() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: 'dynamic-forms',
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
