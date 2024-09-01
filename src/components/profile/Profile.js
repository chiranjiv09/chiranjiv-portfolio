import React, { Fragment, useEffect, useState, useRef } from 'react';
import Scrollspy from 'react-scrollspy';

import '../skills/skills.css';
import './profile.css';

import { basicDetails, profileDetails } from '../../data';
import { arrowIcon, CompanyIconEl } from '../../icons';
import MyProfile from './MyProfile';
import MyExperince from './MyExperince';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import MyEducation from './MyEducation';
import ResumePopup from '../home/ResumePopup';
import DetailsFolder from '../../commonElements/DetailsFolder';

export default function Profile({onSelectBlock, selectedOne, folderBlock, selectedItem}) {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const allNames = profileDetails.map(each=>each.name);
    const containerRef = useRef(null);

    const sections = ["About Me_block", "Experience_block", "Skills_block",  "Projects_block",  "Education_block"];

    const handleUpdate = (currentItem) => {
        console.log("Current active section:", currentItem);
    };

    return (
        <div className="skillsMainCon" id='container' ref={containerRef}>
            <div className="profileLeftSideCon">
                <h3 className='profileUserHeading'>{basicDetails.name}</h3>
                <p className='profileRollText'>{basicDetails.designetion}</p>
                <Scrollspy 
                    items={sections} 
                    currentClassName="is-current" 
                    offset={-50}
                    componentTag="ul" 
                    className="skillsNamesDisplayCon"
                    onUpdate={handleUpdate} 
                    // rootEl={containerRef.current}
                >
                    {allNames.map((eachOne, index)=>{
                        return (
                            <li 
                                key={`profile_${index}`} 
                                className={`eachSkillsBtn ${selectedOne == eachOne ? "selectedEachSkillsBtn" : ''}`} 
                                onClick={()=>onSelectBlock(eachOne, "profile")}
                            >
                                <hr className='eachSkillsBtnHrLine' />
                                <CompanyIconEl className="companyIconEl" />
                                {eachOne}
                            </li>
                        )
                    })}
                </Scrollspy>
            </div>

            <Fragment>
                <div className='topFolderConForMobile'>
                    <p className='sideEachDropdownCon selectedsideEachDropdownCon'>{arrowIcon} _profile</p>
                    <DetailsFolder 
                        key="ProfileFolder"
                        title="profile"
                        keyName="profile"
                        onFunctionCall={onSelectBlock}
                        data={profileDetails}
                        section="profile"
                        folderBlock={folderBlock}
                        selectedItem={selectedItem}
                    />
                </div>

                <div className="profileRightSideCon">
                    {isResumeOpen && <ResumePopup setIsResumeOpen={setIsResumeOpen} />}
                    <MyProfile setIsResumeOpen={setIsResumeOpen} />
                    <MyExperince />
                    <MySkills />
                    <MyProjects />
                    <MyEducation />
                </div>
            </Fragment>
        </div>
    )
}
