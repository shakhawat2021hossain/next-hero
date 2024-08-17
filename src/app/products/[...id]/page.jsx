import React from 'react';

const page = ({params}) => {
    console.log(params);
    if(params.id.length === 3){
        return <h1>{params.id[2]}</h1>
    }
    if(params.id.length === 2){
        return <h1>{params.id[1]}</h1>
    }
    return (
        <div>
            <h1>product is here</h1>
        </div>
    );
};

export default page;