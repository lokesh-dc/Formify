import connectToDatabase from "@/lib/mongodb"
import Users from "@/models/users"

export async function POST(req: Request) {
    const { fullName, email, password, userName } = await req.json()
    console.log({ fullName, email, password, userName })
    await connectToDatabase()
    // await Users.create({ fullName, email, password, userName })
    return Response.json("Form updated successfully", { status: 201 })
}