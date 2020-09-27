import React from "react";

export default ({title,remove})=>{
    return (
        <div className="List">
            <p>{title}</p>
            <button onClick={remove}>&times;</button>          
        </div>
    );
};