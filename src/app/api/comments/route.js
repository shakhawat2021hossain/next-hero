export async function GET(){
    return Response.json({
        comments
    })
}

export async function POST(request) {
    const newCom = await request.json();
    comments.push({
        id: comments.length + 1,
        text: newCom.text
    })

    return Response.json({
        message: "new comment added",
        comments
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