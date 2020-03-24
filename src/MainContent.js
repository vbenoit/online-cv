import React, {useState} from 'react';
import './MainContent.css';
import TypeWriterDiv from './TypeWriterDiv';

import {texts} from './Texts';

export default function MainContent(props) {

    const lines = texts[props.type][props.lang];

    const [content, setContent] = useState();
    const [pristine, setPristine] = useState(true);
    const [previousLang, setPreviousLang] = useState("");
    const [previousType, setPreviousType] = useState("");

    if ( props.type !== previousType 
        || props.lang !== previousLang  ) {
        setPristine(true);
        setPreviousType(props.type);
        setPreviousLang(props.lang);
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