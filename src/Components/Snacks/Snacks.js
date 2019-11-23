import React from 'react';
import AddSnack from "./AddSnack/AddSnack";

const Snacks = props => {
    return (
        <div>
            {props.snacks.map((snack, index) => (
                <AddSnack
                    key={index}
                    item={snack.name}
                    remove={() => props.remove(index)}
                    count={snack.count}
                />
            ))}
        </div>
    )
};

export default Snacks;