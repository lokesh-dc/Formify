import connectToDatabase from '@/lib/mongodb'
import Forms from '@/models/forms'

export async function GET() {
    console.log('Fetching forms...')
    await connectToDatabase()
    const posts = await Forms.find()
    return Response.json(posts)
}

export async function POST(req: Request) {
    const { title, description } = await req.json()
    await connectToDatabase()
    const newPost = await Forms.create({ title, description })
    return Response.json(newPost)
}