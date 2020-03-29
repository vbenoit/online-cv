import React, {useState} from 'react';
import './CircleMenu.css';

import JobsIcon from './svg/JobsIcon';
import DiplomaIcon from './svg/DiplomaIcon';
import SkillsIcon from './svg/SkillsIcon';

import {skills, jobs, diploma} from './Consts';


export default function CircleMenu(props) {

    const svgBaseColor = "#3CF237";
    const activeColor = "#15FF0F";
    const rotationClass = "rotate";

    const [skillsIconBaseColor, setSkillsIconBaseColor] = useState(svgBaseColor);
    const [skillsIconBaseClass, setSkillsIconBaseClass] = useState("");

    const [jobsIconBaseColor, setJobsIconBaseColor] = useState(svgBaseColor);
    const [jobsIconBaseClass, setJobsIconBaseClass] = useState("");

    const [diplomaIconBaseColor, setDiplomaIconBaseColor] = useState(svgBaseColor);
    const [diplomaIconBaseClass, setDiplomaIconBaseClass] = useState("");

    function changeSkillsColor(){
        setSkillsIconBaseColor(activeColor);
        setSkillsIconBaseClass(rotationClass);
        setTimeout(()=> { 
            setSkillsIconBaseColor(svgBaseColor);
            setSkillsIconBaseClass("");
        }, 300);
        props.onClick(skills);
    }

    function changeJobsColor(){
        setJobsIconBaseColor(activeColor);
        setJobsIconBaseClass(rotationClass);
        setTimeout(()=> { 
            setJobsIconBaseColor(svgBaseColor);
            setJobsIconBaseClass("");
        }, 300);
        props.onClick(jobs);
    }

    function changeDiplomaColor(){
        setDiplomaIconBaseColor(activeColor);
        setDiplomaIconBaseClass(rotationClass);
        setTimeout(()=> { 
            setDiplomaIconBaseColor(svgBaseColor);
            setDiplomaIconBaseClass("");
        }, 300);
        props.onClick(diploma);
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
                <div id="line-3-2" onClick={changeJobsColor} className={jobsIconBaseClass} >
                    <JobsIcon color={jobsIconBaseColor} />
                </div>
                <div id="line-3-3"></div>
                <div id="line-3-4" onClick={changeDiplomaColor} className={diplomaIconBaseClass}>
                    <DiplomaIcon color={diplomaIconBaseColor} />
                </div>
                <div id="line-3-5"></div>
            </div>
        </div>
    );
}