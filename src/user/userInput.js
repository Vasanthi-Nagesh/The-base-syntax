import React from 'react';

const Userinput = (props) => {
    const style = {
        padding: "16px",
        backgroundColor: "White",
        font: "inherit",
        margin : "auto",
        width: "50%",
    }
    return (
        <div style={style}>
            <label>User Name : </label>
            <input type="text" onChange={props.changed} value={props.userName}/>
        </div>
    );
}

export default Userinput;