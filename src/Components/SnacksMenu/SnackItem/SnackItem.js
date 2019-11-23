import React from 'react';
import {SnacksList} from "../../../App";

const SnacksItem = props => {
    const snack = SnacksList.find(i => i.name === props.name);
    return (
        <div onClick={props.addClick}>
            <img style={{maxWidth: '50px'}} src={snack.image} alt={props.name}/>
            <h4>{props.name}</h4>
            <span>{snack.price}</span>
        </div>
    )
};

export default SnacksItem;