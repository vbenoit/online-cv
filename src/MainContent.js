import React from 'react';
import './MainContent.css';
import TypeWriterDiv from './TypeWriterDiv';

import {texts} from './Texts';

export default function MainContent(props) {

    console.log(texts[props.type][props.lang]);

    const content = 
        texts[props.type][props.lang].map( (text) => <TypeWriterDiv key={text.key} text={text.value} /> );

    return (
        content
    );

}