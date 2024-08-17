import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Blogs",
    description: "Blogs Page"
};

const page = () => {
    const blogs = [
        {
            id: 1,
            title: "Debounce Function",
            description: "Implementing a debounce function can help improve performance by limiting the rate at which a function gets invoked. It's useful for scenarios like handling search input or window resizing."
        },
        {
            id: 2,
            title: "Clone Arrays and Objects",
            description: "Use the spread operator (...) to quickly clone arrays and objects. This helps avoid unintended side effects caused by referencing the original data."
        },
        {
            id: 3,
            title: "Optional Chaining",
            description: "Use optional chaining (?.) to safely access deeply nested properties in objects without having to manually check for null or undefined values."
        },
        {
            id: 4,
            title: "Template Literals",
            description: "Leverage template literals to create multi-line strings and embed expressions within strings easily. This improves readability and maintainability of your code."
        },
        {
            id: 5,
            title: "Short-Circuit Evaluation",
            description: "Use short-circuit evaluation with logical operators (&&, ||) to assign default values or execute code based on the truthiness of a condition."
        },
        {
            id: 6,
            title: "Array Methods for Clean Code",
            description: "Use array methods like map(), filter(), and reduce() to write clean and concise code for processing arrays. These methods make your code more readable and maintainable."
        }
    ];

    return (
        <div>
            <h1 className='text-4xl text-center'>Blogs</h1>
            <div>
                {
                    blogs.map(blog => <div key={blog.id}
                        className='border-2 p-4 max-w-5xl mx-auto my-2 bg-blue-400'>
                        <div className='mb-2'>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                        <Link href={`/blogs/${blog.id}`} className='rounded-md px-4 py-2 bg-red-500'>View Details</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;