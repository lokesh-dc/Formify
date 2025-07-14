import connectToDatabase from '@/lib/mongodb'
import Forms from '@/models/forms'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase()
        const { id: formId } = params
        const post = await Forms.findOne({ _id: formId })
        if (!post) {
            throw new Error("Form not found")
        }
        return Response.json(post)
    } catch (err) {
        return Response.json({ error: "Something went wrong" }, { status: 400 })
    }

}

export async function POST(req: Request) {
    const { title, description } = await req.json()
    await connectToDatabase()
    await Forms.create({ title, description })
    return Response.json("Form updated successfully", { status: 201 })
}