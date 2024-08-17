import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET_KEY,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", required: true, placeholder: "Enter your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!credentials) {
                    return null
                }
                // return true
                if (email) {
                    // const currUser = users.find(user => user.email === email)
                    const db = await connectDB()
                    const currUser = await db.collection("users").findOne({ email })
                    if (currUser) {
                        if (currUser.pass === password) {
                            return currUser
                        }
                    }
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })

    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }

// const users = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john.doe@example.com",
//         type: "admin",
//         pass: "password123"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane.smith@example.com",
//         type: "moderator",
//         pass: "securepass456"
//     },
//     {
//         id: 3,
//         name: "Michael Johnson",
//         email: "michael.johnson@example.com",
//         type: "admin",
//         pass: "mypass789"
//     },
//     {
//         id: 4,
//         name: "Emily Davis",
//         email: "emily.davis@example.com",
//         type: "moderator",
//         pass: "mypassword101"
//     }
// ];
