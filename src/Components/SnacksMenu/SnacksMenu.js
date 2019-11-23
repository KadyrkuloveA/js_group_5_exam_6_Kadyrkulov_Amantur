import React from 'react';
import SnacksItem from "./SnackItem/SnackItem";

const SnacksMenu = props => {
    return (
        <div>
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