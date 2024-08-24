import React, { Fragment, useState } from 'react'
import { basicDetails, profileDetails } from '../../data';
import '../skills/skills.css';
import './profile.css';
import { arrowIcon, CompanyIconEl } from '../../icons';
import MyProfile from './MyProfile';
import MyExperince from './MyExperince';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import MyEducation from './MyEducation';
import ResumePopup from '../home/ResumePopup';
import DetailsFolder from '../../commonElements/DetailsFolder';

export default function Profile({onSelectBlock, selectedOne, folderBlock, selectedItem}) {
    const [allNames, setAllNames ] = useState(profileDetails.map(each=>each.name));
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    // useEffect(()=>{
    //     let index = allNames.indexOf(selectedOne);
    //     let partOne = allNames.slice(index, allNames.length);
    //     let partTwo = allNames.slice(0, index);

    //     partOne.push(...partTwo);
    //     setAllNames(partOne);
    // },[selectedOne]);

    return (
        <div className="skillsMainCon">
            <div className="profileLeftSideCon">
                <h3 className='profileUserHeading'>{basicDetails.name}</h3>
                <p className='profileRollText'>{basicDetails.designetion}</p>
                <div className="skillsNamesDisplayCon">
                    {allNames.map((eachOne, index)=>{
                        return (
                            <p className={`eachSkillsBtn ${selectedOne == eachOne ? "selectedEachSkillsBtn" : ''}`} key={`profile_${index}`} onClick={()=>onSelectBlock(eachOne, "profile")}>
                                <hr className='eachSkillsBtnHrLine' />
                                <CompanyIconEl className="companyIconEl" />
                                {eachOne}
                            </p>
                        )
                    })}
                </div>
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
