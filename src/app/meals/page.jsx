import SearchMeals from '@/Components/SearchMeals';
import React from 'react';

const Meals = () => {
    return (
        <div className='my-8'>
            <h1 className='text-5xl text-center my-4 text-purple-600'>Choose your Meals</h1>
            <p className='text-center'>Choose your meals by search. Also categorized food in your own ways.</p>
            <SearchMeals></SearchMeals>
        </div>
    );
};

export default Meals;