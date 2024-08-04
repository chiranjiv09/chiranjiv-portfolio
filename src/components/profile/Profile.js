import React, { useEffect, useState } from 'react'
import { basicDetails, profileDetails } from '../../data';
import '../skills/skills.css';
import './profile.css';
import { companyIcon, CompanyIconEl } from '../../icons';
import MyProfile from './MyProfile';
import MyExperince from './MyExperince';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import MyEducation from './MyEducation';

export default function Profile({onSelectBlock, selectedOne}) {
    const [allNames, setAllNames ] = useState(profileDetails.map(each=>each.name));

    useEffect(()=>{
        let index = allNames.indexOf(selectedOne);
        let partOne = allNames.slice(index, allNames.length);
        let partTwo = allNames.slice(0, index);

        partOne.push(...partTwo);
        setAllNames(partOne);
    },[selectedOne]);

    return (
        <div className="skillsMainCon">
            <div className="profileLeftSideCon">
                <h3 className='profileUserHeading'>{basicDetails.name}</h3>
                <p className='profileRollText'>{basicDetails.designetion}</p>
                <div className="skillsNamesDisplayCon">
                    {allNames.map((eachOne, index)=>{
                        return (
                            <p className="eachSkillsBtn" key={`profile_${index}`} onClick={()=>onSelectBlock(eachOne, "profile")}>
                                <hr className='eachSkillsBtnHrLine' />
                                <CompanyIconEl className="companyIconEl" />
                                {eachOne}
                            </p>
                        )
                    })}
                </div>
            </div>

            <div className="profileRightSideCon">
                <MyProfile />
                <MyExperince />
                <MySkills />
                <MyProjects />
                <MyEducation />
            </div>
        </div>
    )
}
