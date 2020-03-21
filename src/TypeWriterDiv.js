import React from 'react';
import './TypeWriterDiv.css';

export default function TypeWriterDiv(props) {

    return (
        <div className="typewriter">
            <p>{props.text}</p>
        </div>
    );

}