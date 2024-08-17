"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    // console.log(pathName);
    const session = useSession()
    console.log(session);

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Products",
            path: "/products"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
    ]

    const router = useRouter()
    const handleLogin = () => {
        router.push('/api/auth/signin')
    }
    if (pathName.includes('dashboard')) {
        return <>
            <div className='bg-amber-500'>Dashboard Sidebar</div>
        </>
    }
    return (
        <div className="flex justify-between px-8 bg-slate-400 py-2 items-center">
            <h1 className='text-3xl font-bold'>Logo</h1>
            <ul className='flex space-x-4'>
                {
                    links.map(link => <Link className={`${pathName === link.path && 'text-cyan-600'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            {
                session.status === "authenticated" ? <div className='flex items-center space-x-2'>
                    <p className='text-red-600'>{session?.data?.user?.name}</p>
                    <button onClick={() => signOut()} className='btn px-4 py-2 outline-none rounded-md border'>Logout</button>
                </div> :

                    <button onClick={handleLogin} className='btn px-4 py-2 outline-none rounded-md border'>Login</button>
            }
        </div>
    );
};

export default Navbar;