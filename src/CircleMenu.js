import React, {useState} from 'react';
import './CircleMenu.css';

import JobsIcon from './svg/JobsIcon';
import DiplomaIcon from './svg/DiplomaIcon';
import SkillsIcon from './svg/SkillsIcon';


export default function CircleMenu(props) {

    const svgBaseColor = "#3CF237";
    const activeColor = "#15FF0F";
    const rotationClass = "rotate";

    const [skillsIconBaseColor, setSkillsIconBaseColor] = useState(svgBaseColor);
    const [skillsIconBaseClass, setSkillsIconBaseClass] = useState("");

    function changeSkillsColor(){
        setSkillsIconBaseColor(activeColor);
        setSkillsIconBaseClass(rotationClass);
        setTimeout(()=> { 
            setSkillsIconBaseColor(svgBaseColor);
            setSkillsIconBaseClass("");
        }, 300);
    }

    return (
        <div className={'Circle-menu ' + props.circleMenuClass}>
            <div id="line-1" onClick={changeSkillsColor} className={skillsIconBaseClass} >
                <SkillsIcon color={skillsIconBaseColor} />
            </div>
            <div id="line-2">
            
            </div>
            <div id="line-3">
                <div id="line-3-1"></div>
                <div id="line-3-2" >
                    <JobsIcon color={svgBaseColor} />
                </div>
                <div id="line-3-3"></div>
                <div id="line-3-4">
                    <DiplomaIcon color={svgBaseColor} />
                </div>
                <div id="line-3-5"></div>
            </div>
        </div>
    );
}