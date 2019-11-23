import React from 'react';
import './AddSnack.css';

const AddSnack = props =>{
    return (
        <div className='SnackListItem'>
            <div>
                <h3>{props.item}</h3>
                <span>x{props.count} </span>
                <span>total: {props.price} soms</span>
            </div>
            <div>
                <button onClick={props.remove} className='btn'>x</button>
            </div>
        </div>
    )
};

export default AddSnack;