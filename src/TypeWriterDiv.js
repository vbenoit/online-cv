import React, { useState } from 'react';
import './TypeWriterDiv.css';

export default function TypeWriterDiv(props) {

    let classRemoved = false;
    const [divClass, setDivClass] = useState( props.divClass );
    
    function removeClass(){
        if (!classRemoved) {
            setDivClass("");
            classRemoved = true;
        }
        props.appendElements(props.lineIndex);
    }

    return (
        <div onAnimationEnd={removeClass} className={divClass} >
            <p>{props.text}</p>
        </div>
    );

}