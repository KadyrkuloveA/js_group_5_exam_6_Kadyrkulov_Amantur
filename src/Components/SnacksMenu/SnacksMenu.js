import React from 'react';
import SnacksItem from "./SnackItem/SnackItem";
import './SnacksMenu.css'

const SnacksMenu = props => {
    return (
        <div className='SnacksMenu'>
            {props.snacks.map((snack, index) => (
                <SnacksItem
                    key={index}
                    name={snack.name}
                    addClick={() => props.addClick(index)}
                />
            ))}
        </div>
    )
};

export default SnacksMenu;