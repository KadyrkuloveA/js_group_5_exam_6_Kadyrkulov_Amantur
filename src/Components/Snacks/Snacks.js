import React from 'react';
import AddSnack from "./AddSnack/AddSnack";
import {SnacksList} from "../../App";
import './Snacks.css';

const Snacks = props => {
    let arrCounter  = 0;
    const something = props.snacks.map((snack, index) => {
            let priceList = [];
            if(snack.count >= 1){
                priceList.push(<AddSnack
                    key={index}
                    item={snack.name}
                    remove={() => props.remove(index)}
                    count={snack.count}
                    price={snack.count * SnacksList[index].price}
                />)
            } else {
                arrCounter++;
                if(arrCounter === 6){
                    priceList.push(<p>Order is empty!<p>
                        Please add some items!
                    </p></p>);
                }
            }
            return priceList;
        });
    return (
        <div className='priceList'>
            {something}
            <div className='totalPrice'>
                <span>Total: {props.total} soms</span>
                <p className='tax'>considering service and tax (+ 5%)</p>
            </div>
        </div>
    )
};

export default Snacks;