import React, { useState } from 'react'
import Button from '../../commonElements/Button';
import projectPosterImg from '../../images/projectPoster.jpg';
import './projects.css';
import { projectDetails } from '../../data';
import ProjectDetailsPopup from './ProjectDetailsPopup';
import DetailsFolder from '../../commonElements/DetailsFolder';
import { arrowIcon } from '../../icons';
import ImagesPopup from '../../commonElements/ImagesPopup';

const initialState = {
    isPopup: false, selectedIndex: 0, urlList:[],
}

const initialObj = {
    isPopup: false,
    data: {},
    index: 0,
}

export default function Projects({onSelectBlock, selectedItem, folderBlock}) {
  const [popupData, setPopupData ] = useState(initialObj);
  const [imagePopup, setImagePopup ] = useState(initialState);

  const onPopupClick = (identifier, data, index) => {
    let obj = {};
    if(identifier == "OPEN"){
        setPopupData(prev=>({
            ...prev,
            isPopup: true,
            data: data,
            index: index,
        }))
    }else{
        setPopupData(initialObj)
    }
  };

  const onImagePopup = (identifier, index, urlList) => {
    switch(identifier){
        case "OPEN":
            setImagePopup(prev=> ({
                ...prev, 
                isPopup: true, 
                urlList:[...urlList],
                selectedIndex : index,
            }));
            break;
        case "CLOSE":
            setImagePopup(initialState);
            break;
        case "INDEX":
            setImagePopup(prev=> ({
                ...prev, 
                selectedIndex : index,
            }));
            break;
    }
  }

  return (
    <div className="projectsMainCon">

        {popupData.isPopup &&
        <ProjectDetailsPopup 
            onPopupClick={onPopupClick} 
            popupData={popupData}
            onImagePopup={onImagePopup}
        />
        }
        {imagePopup.isPopup &&
        <ImagesPopup imagePopup={imagePopup} onImagePopup={onImagePopup} />
        }

        <div className='topFolderConForMobile'>
            <p className='sideEachDropdownCon selectedsideEachDropdownCon'>{arrowIcon} _projects</p>
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
        </div>

        {projectDetails.map((eachCrad, index)=>{
            return(
                <div key={`projCard_${index}`}  id={`${eachCrad.name}_block`} className="projectCard">
                    <p className="projectCount">Project {index+1}</p>
                    <h3 className="projectHeading">_{eachCrad.name}</h3>
                    <div className="innerProjectCard">
                        <div style={{backgroundImage: `url(${projectPosterImg})`}} className="innerProjectCardTopCon">
                            <div className='innerProjectTechnologiesCon'>
                                {eachCrad.technologiesUsed.map((eachTech, eachIndex)=>{
                                    if(eachIndex < 3){
                                        return(
                                            <img 
                                                key={`eachTech_${eachIndex}`} 
                                                alt="" 
                                                src={eachTech.url} 
                                                className="projectTechImg" 
                                                title={eachTech.name}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="innerProjectCardBottomCon">
                            <p className="projectCardDesc">{eachCrad.description}</p>
                            <Button
                                key="project_btn_1"
                                buttonId ="project_btn_1"
                                buttonConClassName="projectBtnCon"
                                buttonClassName="projectBtn"
                                onSubmit={(e)=>onPopupClick("OPEN", eachCrad, index)}
                                title="view-project"
                            />
                        </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}
