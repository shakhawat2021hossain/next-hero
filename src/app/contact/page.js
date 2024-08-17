import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata = {
    title: "Contact",
    description: "Contact Page",
};
const Contact = async() => {
    const session = await getServerSession(authOptions)
    console.log(session);

    return (
        <div>
            This is contact page.
        </div>
    );
};

export default Contact;