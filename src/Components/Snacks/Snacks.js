import React from 'react';
import AddSnack from "./AddSnack/AddSnack";
import {SnacksList} from "../../App";

const Snacks = props => {
    return (
        <div className='priceList'>
            {props.snacks.map((snack, index) => (
                <AddSnack
                    key={index}
                    item={snack.name}
                    remove={() => props.remove(index)}
                    count={snack.count}
                    price={snack.count * SnacksList[index].price}
                />
            ))}
            <div>
                <span>{props.total}</span>
            </div>
        </div>
    )
};

export default Snacks;