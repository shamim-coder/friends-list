import React from 'react';
import "./Menu.css";

const Menu = () => {
    const mainMenu = ['Home', 'About', 'Services', 'Contact']
    return (
        <>
            <ul>

                {
                    mainMenu.map(menu => <li key={Math.random() * 10}><a href={menu}>{menu}</a></li>)
                }
            </ul>
        </>
    );
};

export default Menu;