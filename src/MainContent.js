import React, {useState} from 'react';
import './MainContent.css';
import TypeWriterDiv from './TypeWriterDiv';

import {texts} from './Texts';

export default function MainContent(props) {

    const lines = texts[props.type][props.lang];

    const [content, setContent] = useState();
    //const [lineIndex, setLineIndex] = useState(1);
    const [pristine, setPristine] = useState(true);
    const [previousType, setPreviousType] = useState("");

    if ( props.type !== previousType ) {
        setPristine(true);
        setPreviousType(props.type);
    }

    function appendElements( lineIndex ) {

        setPristine(false);

        if ( lineIndex < lines.length ){
            lineIndex ++;
        }

        setContent(
            lines.slice(0,lineIndex).map( 
                (text) => 
                    <TypeWriterDiv 
                        divClass="typewriter"
                        lineIndex={lineIndex} appendElements={appendElements} 
                        key={text.key} text={text.value} /> )
        )
    }

    if (pristine) {
        appendElements(0);
    }

    return (
        content
    );

}