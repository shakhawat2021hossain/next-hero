import { getPosts } from '@/functions/postsApi';
import Link from 'next/link';
import React from 'react';

const page = async() => {
    const posts = await getPosts()
    return (
        <div className='my-8'>
            <h1 className='text-center text-4xl'>Posts: {posts.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 my-8'>
                {
                    posts?.slice(0, 20).map(post => <div key={post.id} className='border-2 p-4 bg-slate-400 rounded-lg'>
                        <h2>{post.title}</h2>
                        <div>{post.body}</div>
                        <button className='bg-red-400 px-4 py-2'><Link href={`/posts/${post.id}`}>View Details</Link></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;