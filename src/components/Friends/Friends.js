import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Friends.css'

const Friends = (props) => {
    const addHandler = props.handler
    const { full_name, image, job_title, color } = props.friends
    console.log(color);
    const colorStyle = { background: { color } }
    return (
        <div style={{ background: color }} className="friend">
            <img src={image} alt={image} />
            <h4>{full_name}</h4>
            <p>{job_title}</p>
            <button onClick={() => addHandler(props.friends)} className="cart-btn"> <FontAwesomeIcon icon={faPlusSquare} /> Add to List</button>
        </div>
    );
};

export default Friends;

