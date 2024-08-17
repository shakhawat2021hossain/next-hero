import { NextResponse } from "next/server"

// basic
// const user = false;
// const cookie = "next-hero"
// export const middleware = (request) =>{
//     // return NextResponse.next()
//     // return NextResponse.redirect(new URL('/contact', request.url))
//     // return NextResponse.rewrite(new URL('/contact', request.url))

//     // if(!user){
//     //     return NextResponse.redirect(new URL('/login', request.url))
//     // }
//     // return NextResponse.next()

//     const cookies = request.cookies.get('token')
//     console.log(cookies);
//     if(!cookies || cookies.value !== cookie){
//         return NextResponse.redirect(new URL("/login", request.url))
//     }
//     return NextResponse.next()


// }

// export const config = {
//     // matcher: "/dashboard"
//     // matcher: ["/call", "/get-in-touch"]
//     // matcher: ["/call", "/get-in-touch"]
//     matcher: ["/dashboard", "/products"]
// }


export const middleware = (request) =>{
    const token = request.cookies.get('next-auth.session-token')
    console.log(token);
    if(!token){
        return NextResponse.redirect(new url('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/blogs', '/products']
}

// const uri = "mongodb+srv://shakhawathossainweb:<password>@cluster0.28i6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// 3N2nlrgWJA7e65Zy
// shakhawathossainweb