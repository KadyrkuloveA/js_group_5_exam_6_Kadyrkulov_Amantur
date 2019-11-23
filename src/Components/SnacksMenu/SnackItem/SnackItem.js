import React from 'react';
import {SnacksList} from "../../../App";
import './SnackItem.css';

const SnacksItem = props => {
    const snack = SnacksList.find(i => i.name === props.name);
    return (
        <div onClick={props.addClick} className='SnackItem'>
            <img style={{maxWidth: '50px'}} src={snack.image} alt={props.name}/>
            <h4>{props.name}</h4>
            <span>Price: {snack.price} soms</span>
        </div>
    )
};

export default SnacksItem;