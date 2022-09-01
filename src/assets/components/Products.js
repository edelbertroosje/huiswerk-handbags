import React from "react";

function Bags({focus, img, name, price}){
    return (
        <article>
            <span>{focus}</span>
            <img src={img} alt='The {name} bag'/>
            <p>The {name} bag</p>
            <h4>€ {price},-</h4>
        </article>
    );
}
export default Bags;