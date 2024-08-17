"use client"
import React from 'react';

const SignUp = () => {

    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const role = e.target.role.value;
        const user = { name, email, pass, role }
        const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        })
        console.log(res);
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleRegister} className="p-6 bg-white rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name='name'
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name='pass'
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <select
                        name='role'
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                    >
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="member">Member</option>
                    </select>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
