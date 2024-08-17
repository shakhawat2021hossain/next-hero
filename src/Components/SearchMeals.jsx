"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SearchMeals = () => {
    const [search, setSearch] = useState("")
    const [meals, setMeals] = useState([])
    const handleSearch = e => {
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
            setMeals(data.meals)
        }
        loadData()
    }, [search])
    console.log(meals);

    return (
        <div>
            <div className='max-w-3xl mx-auto my-8'>
                <input onChange={handleSearch} type="text" className='border textlg p-2 w-8/12' placeholder='Search your Meal' />
                <button className='w-auto mx-4 bg-purple-600 px-4 py-2 text-white border-0 rounded-md'>Search</button>
            </div>
            <div className='mx-12 grid grid-cols-3'>
                {
                    meals?.map(meal => <div key={meal.idMeal}>
                        <Image src={meal.strMealThumb} width={400} height={300} alt={meal.strMeal}></Image>
                        {/* <img src={meal.strMealThumb} alt="img" /> */}
                        <div>
                            <h1>{meal.strMeal}</h1>
                            <p>{meal.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SearchMeals;