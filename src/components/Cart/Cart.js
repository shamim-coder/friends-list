import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const carts = props.cart
    console.log(carts);
    const totalSalary = carts.reduce((acc, curr) => {
        return acc + Math.round(Number(curr.sellery));
    }, 0)
    return (
        <div className="cart">
            <p>Friend Added : {carts.length}</p>
            <p className="totalSalary">Total Salary: {totalSalary}</p>

            {
                carts.map(cart => {
                    return (
                        <div className="wrap">
                            <div className="img">
                                <img src={cart.image} alt={cart.image} />
                            </div>

                            <div className="salary">
                                <h4 className="title">{cart.full_name}</h4>
                                <p><small>{cart.sellery}</small></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;