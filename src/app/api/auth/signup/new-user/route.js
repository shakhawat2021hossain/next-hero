import connectDB from "@/lib/connectDB"

export const POST = async(request) =>{
    try{
        const db = await connectDB()
        const users = db.collection("users")
        const newUser = await request.json()
        const res = await users.insertOne(newUser)
        return Response.json({message: "new user created"})

    }
    catch{
        return Response.json({message: "user cant create something went wrong"})
    }

}