import React, { useState, useEffect } from 'react';
import friendsData from "../../resources/fakedata.json";
import Cart from '../Cart/Cart';
import Friends from '../Friends/Friends';
import './Contents.css'


const Contents = () => {
    const [friends, setFriends] = useState([])
    const [cart, setCart] = useState([])
    const first10 = friends.slice(0, 10)

    useEffect(() => {
        setFriends(friendsData)
    }, [])

    const addHandler = (friends) => {
        const newCart = [...cart, friends]
        setCart(newCart)
    };

    return (
        <section className="main">
            <div className="friends">
                {
                    first10.map((friend) => <Friends handler={addHandler} key={friend.id} friends={friend} />)
                }
            </div>
            <aside className="cart-area">
                <Cart cart={cart} />
            </aside>
        </section>
    );
};

export default Contents;