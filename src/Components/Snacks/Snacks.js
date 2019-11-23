import React from 'react';
import AddSnack from "./AddSnack/AddSnack";
import {SnacksList} from "../../App";

const Snacks = props => {
    return (
        <div>
            {SnacksList.map((snack, index) => (
                <AddSnack
                    key={index}
                    item={this.state.name}
                    image={snack.image}
                    // remove={() => props.remove(index)}
                    count={this.state.count}
                />
            ))}
        </div>
    )
};

export default Snacks;