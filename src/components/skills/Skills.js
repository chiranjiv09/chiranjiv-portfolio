import React, { Fragment, useEffect, useState } from 'react';
import './skills.css';
import { skillsDetails } from '../../data';
import { arrowIcon, companyIcon, CompanyIconEl } from '../../icons';
import DetailsFolder from '../../commonElements/DetailsFolder';

export default function Skills({onSelectBlock, selectedOne, folderBlock, selectedItem}) {
    const [allSkills, setAllSkills ] = useState(skillsDetails.map(each=>each.name));

    // useEffect(()=>{
    //     let index = allSkills.indexOf(selectedOne);
    //     let partOne = allSkills.slice(index, allSkills.length);
    //     let partTwo = allSkills.slice(0, index);

    //     partOne.push(...partTwo);
    //     setAllSkills(partOne);
    // },[selectedOne]);

    return (
        <div className="skillsMainCon">
            <div className="skillsLeftSideCon">
                <h3 className='skillsSelectedHeading'>{companyIcon} {selectedOne}</h3>
                <div className="skillsNamesDisplayCon">
                    {allSkills.map((eachOne, index)=>{
                        return (
                            <p className={`eachSkillsBtn ${selectedOne == eachOne ? "selectedEachSkillsBtn" : ''}`} key={`skills_${index}`} onClick={()=>onSelectBlock(eachOne, "skill")}>
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
                    <p className='sideEachDropdownCon selectedsideEachDropdownCon'>{arrowIcon} _skill</p>
                    <DetailsFolder
                        key="skillsFolder"
                        title="Skills"
                        keyName="skill"
                        onFunctionCall={onSelectBlock}
                        data={skillsDetails}
                        section="skill"
                        folderBlock={folderBlock}
                        selectedItem={selectedItem}
                    />
                </div>

                <div className="skillsRightSideCon">
                    <h3 className='skillsRightMainHeading'>{selectedOne}</h3>
                    <p className="skillsRightContant">{skillsDetails.filter(each=>each.name == selectedOne)[0].content}</p>
                    <div className="skillsIconsDisplayBox">
                        {skillsDetails.filter(each=>each.name == selectedOne)[0].technologies.map((eachTect, ind)=>{
                            return(
                                <div className="skillBox">
                                    <img alt="" src={eachTect.url} />
                                    <span>{eachTect.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        </div>
    )
}
