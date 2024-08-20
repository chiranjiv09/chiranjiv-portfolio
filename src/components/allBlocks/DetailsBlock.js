import React, { Fragment, useState } from 'react';
import './allDetailsBlock.css';
import { arrowIcon, BackgroundBottomSvg, BackgroundTopSvg, crossIcon, folderIcon } from '../../icons';
import Button from '../../commonElements/Button';
import Expereince from '../expereince/Expereince';
import { companyDetails, educationDetails, projectDetails, skillsDetails, srollIntoView, profileDetails } from '../../data';
import Education from '../education/Education';
import DetailsFolder from '../../commonElements/DetailsFolder';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Profile from '../profile/Profile';
import Contact from '../contact/Contact';

const DetailsBlock = ({block, onSelect, selectedSections}) => {
    const [folderBlock, setFolderBlock ] = useState({
        experience: true, education: true, skill:true , project:true, profile: true
    });

    const [selectedItem, setSelectedItem] = useState({
        experience: companyDetails[0].name, 
        education: educationDetails[0].name,
        skill: skillsDetails[0].name,
        project: projectDetails[0].name,
        profile: profileDetails[0].name
    });

    const onSelectBlock = (name, identifier, key) => {

        if(key){
            let oldObj = {...folderBlock};
            oldObj[key] = !oldObj[key];
            setFolderBlock(oldObj);
        }else{
            let oldSelectObj = {...selectedItem};
            oldSelectObj[identifier] = name;
            setSelectedItem(oldSelectObj);
            srollIntoView(`${name}_block`);
        }

        let dropdownEl = document.getElementById("appMainContainer");

        if(dropdownEl){
            //for mobile ---
            let displayWidth = dropdownEl.offsetWidth;
            if(key === undefined && displayWidth <= 800){
                let oldObj = {...folderBlock};
                oldObj[identifier] = !oldObj[identifier];
                setFolderBlock(oldObj);
            }
        };
    };
    
    return (
        <div className="allDetailsBlockMainCon">
{/* Side bar */}
            <div className="allDetailsSideBar">
                <Button
                    key="_hello_dropwon"
                    buttonId ="_hello_dropwon"
                    buttonConClassName={`${block != "Hello" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Hello" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_hello"
                    name="hello"
                    value={"Hello"}
                    icon={<span className={`dropdownArrow ${block == "Hello" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                <Button
                    key="_experience_dropwon"
                    buttonId ="_experience_dropwon"
                    buttonConClassName={`${block != "Experience" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Experience" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_experience"
                    name="experience"
                    value={"Experience"}
                    icon={<span className={`dropdownArrow ${block == "Experience" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                {block == "Experience" &&
                <DetailsFolder 
                    key="expericeFolder"
                    title="Experience"
                    keyName="experience"
                    onFunctionCall={onSelectBlock}
                    data={companyDetails}
                    section="experience"
                    folderBlock={folderBlock}
                    selectedItem={selectedItem}
                />
                }

                <Button
                    key="_skill_dropwon"
                    buttonId ="_skill_dropwon"
                    buttonConClassName={`${block != "Skill" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Skill" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_skill"
                    name="skill"
                    value={"Skill"}
                    icon={<span className={`dropdownArrow ${block == "Skill" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                {block == "Skill" &&
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
                }
                <Button
                    key="_education_dropwon"
                    buttonId ="_education_dropwon"
                    buttonConClassName={`${block != "Education" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Education" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_education"
                    name="education"
                    value={"Education"}
                    icon={<span className={`dropdownArrow ${block == "Education" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                {block == "Education" &&
                <DetailsFolder 
                    key="educationFolder"
                    title="Education"
                    keyName="education"
                    onFunctionCall={onSelectBlock}
                    data={educationDetails}
                    section="education"
                    folderBlock={folderBlock}
                    selectedItem={selectedItem}
                />
                }
                
                <Button
                    key="_projects_dropwon"
                    buttonId ="_projects_dropwon"
                    buttonConClassName={`${block != "Projects" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Projects" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_projects"
                    name="projects"
                    value={"Projects"}
                    icon={<span className={`dropdownArrow ${block == "Projects" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />
                {block == "Projects" &&
                <DetailsFolder 
                    key="ProjectsFolder"
                    title="Projects"
                    keyName="project"
                    onFunctionCall={onSelectBlock}
                    data={projectDetails}
                    section="project"
                    folderBlock={folderBlock}
                    selectedItem={selectedItem}
                />
                }

                <Button
                    key="_profile_dropwon"
                    buttonId ="_profile_dropwon"
                    buttonConClassName={`${block != "Profile" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Profile" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_profile"
                    name="profile"
                    value={"Profile"}
                    icon={<span className={`dropdownArrow ${block == "Profile" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                {block == "Profile" &&
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
                }

                <Button
                    key="_contact-me_dropwon"
                    buttonId ="_contact-me_dropwon"
                    buttonConClassName={`${block != "Contact-me" ? "forMobile":""}`}
                    buttonClassName={`sideEachDropdownCon ${block == "Contact-me" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_contact-me"
                    name="contact-me"
                    value={"Contact-me"}
                    icon={<span className={`dropdownArrow ${block == "Contact-me" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />
            </div>

            <div className="allDetailsRightSideCon">
{/* Selected Items Header */}
                <div className="allDetailsRightSideHeaderCon">
                    {selectedSections && selectedSections.length > 0 && 
                        selectedSections.map((eachSection, index) =>{
                            return(
                                <div key={index} className='headerSectionNamesCon' style={{color: eachSection == block ? "#FFF" : "" }} >
                                    <span className='headerSectionNamesHoldingCon' onClick={()=>onSelect({target:{value: eachSection}})}>
                                        <span className={`folderIcon ${eachSection == block ? "selectedFolderIcon" : ""}`}>
                                            {folderIcon}
                                        </span>
                                        {eachSection} 
                                    </span>
                                    <span id={`blockCross_${index}`} className='sectionBtnCross' onClick={()=>onSelect(undefined, eachSection, index)} >
                                        {crossIcon}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

{/* Selected Section Display Container */}
                <div className='slectedSectionMainCon'>

                    <BackgroundTopSvg className="backgroundTopSvg" />
                    <BackgroundBottomSvg className="backgroundBottomSvg"  />

                    {block == "Experience" &&
                    <Fragment>
                        <hr className="hrLineInCenter" />
                        <Expereince 
                            onSelectBlock={onSelectBlock}
                            folderBlock={folderBlock}
                            selectedItem={selectedItem} 
                        />
                    </Fragment>
                    }

                    {block == "Education" && 
                    <Education 
                        onSelectBlock={onSelectBlock}
                        folderBlock={folderBlock}
                        selectedItem={selectedItem} 
                    /> 
                    }
                    
                    {block == "Skill" &&
                    <Skills 
                        onSelectBlock={onSelectBlock}
                        selectedOne={selectedItem.skill}
                        folderBlock={folderBlock}
                        selectedItem={selectedItem}
                    />
                    }

                    {block == "Projects" && 
                    <Projects 
                        onSelectBlock={onSelectBlock}
                        folderBlock={folderBlock}
                        selectedItem={selectedItem} 
                    /> 
                    }

                    {block == "Profile" &&
                    <Profile
                        onSelectBlock={onSelectBlock}
                        selectedOne={selectedItem.profile}
                        folderBlock={folderBlock}
                        selectedItem={selectedItem} 
                    />
                    }

                    {block == "Contact-me" && <Contact />}
                </div>

            </div>
        </div>
    );
}


export default DetailsBlock;