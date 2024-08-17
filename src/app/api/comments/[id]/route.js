export async function GET(req, {params}) {
    const comment = comments[params.id-1]
    return Response.json({
        // msg: "dynamic route"
        comment
    })
    
}
export async function PATCH(req, {params}) {
    console.log(params.id);
    const newCom = await req.json()
    const index = comments.findIndex(com => com.id === parseInt(params.id))
    comments[index] = {
        id: params.id,
        text: newCom.text
    }
    return Response.json({
        msg: "dynamic route",
        comments
    })
}

export async function DELETE(req, {params}) {
    const filtered = comments.filter(com => com.id !== parseInt(params.id))
    return Response.json({
        msg: "deleted successfully",
        filtered
    })

}

const comments = [
    {
        id: 1,
        text: "comment"
    },
    {
        id: 2,
        text: "comment"
    },
    {
        id: 3,
        text: "comment"
    },
]