import React, { useEffect, useState } from 'react';
import './skills.css';
import { skillsDetails } from '../../data';
import { companyIcon, CompanyIconEl } from '../../icons';

export default function Skills({onSelectBlock, selectedOne}) {
    const [allSkills, setAllSkills ] = useState(skillsDetails.map(each=>each.name));

    useEffect(()=>{
        let index = allSkills.indexOf(selectedOne);
        let partOne = allSkills.slice(index, allSkills.length);
        let partTwo = allSkills.slice(0, index);

        partOne.push(...partTwo);
        setAllSkills(partOne);
    },[selectedOne]);

    return (
        <div className="skillsMainCon">
            <div className="skillsLeftSideCon">
                <h3 className='skillsSelectedHeading'>{companyIcon} {selectedOne}</h3>
                <div className="skillsNamesDisplayCon">
                    {allSkills.map((eachOne, index)=>{
                        if(selectedOne != eachOne){
                        return (
                            <p className="eachSkillsBtn" key={`skills_${index}`} onClick={()=>onSelectBlock(eachOne, "skill")}>
                                <hr className='eachSkillsBtnHrLine' />
                                <CompanyIconEl className="companyIconEl" />
                                {eachOne}
                            </p>
                            )
                        }
                    })}
                </div>
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
        </div>
    )
}
