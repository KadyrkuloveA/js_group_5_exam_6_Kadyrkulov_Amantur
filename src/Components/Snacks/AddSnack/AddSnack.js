import React from 'react';

const AddSnack = props =>{
    return (
        <div className='foodItem'>
            <h3>{props.item}</h3>
            <p>{props.count}</p>
            <button onClick={props.remove}>delete</button>
            <span>{props.price}</span>
        </div>
    )
};

export default AddSnack;