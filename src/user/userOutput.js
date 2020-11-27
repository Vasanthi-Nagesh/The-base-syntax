import React from 'react';
import "./user.css"

const Useroutput = (props) => {
    return (
        <div className="Output">
            <p>A text of my Choice</p>
            <p>I am { props.userName } </p>
        </div>
    );
}

export default Useroutput;