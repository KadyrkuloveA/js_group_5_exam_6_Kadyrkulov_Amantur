import React from 'react';

const AddSnack = props =>{


    return (
        <div className='foodItem'>
            <img src={props.image} alt={props.name}/>
            <h3>{props.item}</h3>
            <p>{props.count}</p>
            {/*<button onClick={props.remove}></button>*/}
        </div>
    )
};

export default AddSnack;