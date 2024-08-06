import React, { Fragment, useState } from 'react'
// import ReactPlayer from 'react-player'

import Button from '../../commonElements/Button';
import projectPosterImg from '../../images/projectPoster.jpg';
import githubImg from '../../images/github.png';
import { backArrowIcon, CompanyIconEl, popupCrossIcon } from '../../icons';

// import video from '../../videos/'

export default function ProjectDetailsPopup({onPopupClick, popupData }) {

    const [selectedMedia, setSelectedMedia] = useState("I");

    let eachCrad = popupData.data ? popupData.data : "" ;
    let index = eachCrad.index ? eachCrad.index : "";


    const onMainConClick = (event) => {
        var myElement = document.getElementById('innerContainer');

        if (myElement && !myElement.contains(event.target)) {
            console.log('clicked outside');
            onPopupClick("CLOSE");
        }
    };


  return (
    <div className="projectPopupStaticCon" onClick={(e)=>onMainConClick(e)} >
        <div className="projectPopupinnerPopupCon" id='innerContainer'>
            <div className='popupBackBtn' onClick={()=>onPopupClick("CLOSE")}>{backArrowIcon} Back</div>
            {/* Right side card con */}
            <div className="projectPopupLeftCon">
                <p className="projectCount">Project {index+1}</p>
                <h3 className="projectHeading">_{eachCrad.name}</h3>

                <div className="innerProjectCard innerProjectCard2">
                    <div style={{backgroundImage: `url(${projectPosterImg})`}} className="innerProjectCardTopCon">
                        <div className='innerProjectTechnologiesCon'>
                            {eachCrad.technologiesUsed && eachCrad.technologiesUsed.map((eachTech, eachIndex)=>{
                                return(
                                    <img key={`eachTech_${eachIndex}`} alt="" src={eachTech.url} className="projectTechImg" />
                                )
                            })}
                        </div>
                    </div>

                    <Button
                        key="project_btn_2"
                        buttonId ="project_btn_2"
                        buttonConClassName="projectBtnCon"
                        buttonClassName="projectBtn popupInnerProjectBtnTwo"
                        onSubmit={(e)=>("")}
                        title="view-project"
                    />

                    <p className="projectPopupHeaderContent popupGitBoxMobile">
                      <img className='projectPopupGitIcon' src={githubImg} alt="" />
                      _Git link:
                      <span>{` https://{userid}.github.io/{reponame}`}</span>
                    </p>

                    <div className="innerProjectCardTechUsed">
                        <span>
                          Tech Stack :-
                          {eachCrad.technologiesUsed && eachCrad.technologiesUsed.map((eachTech, eachIndex)=>{
                              return(
                                  <span key={`eachTechproj_${eachIndex}`}>{eachTech.name}{eachIndex != eachCrad.technologiesUsed.length-1 ? ", " : "."}</span>
                              )
                          })}
                        </span>
                    </div>

                    <p className="projectCardDesc2">{eachCrad.contant}</p>

                    <Button
                        key="project_btn_1"
                        buttonId ="project_btn_1"
                        buttonConClassName="projectBtnCon"
                        buttonClassName="projectBtn popupInnerProjectBtnOne"
                        onSubmit={(e)=>("")}
                        title="view-project"
                    />
                </div>
                
            </div>

            {/* Left side card con */}

            <div className="projectPopuprightCon">
                <div className="projectPopupHeaderCon">
                    <p className="projectPopupHeaderContent">
                      <img className='projectPopupGitIcon' src={githubImg} alt="" />
                      _Git link:
                      <span>{` https://{userid}.github.io/{reponame}`}</span>
                    </p>

                    <span className='popupCrossIcon' onClick={()=>onPopupClick("CLOSE")}>
                      {popupCrossIcon}
                    </span>
                </div>

                <div className='projectMediaBtnsCon'>
                    <Button
                        key="projectMediaBtn"
                        buttonId ="projectMediaBtn"
                        buttonConClassName=""
                        buttonClassName={`projectMediaBtn ${selectedMedia == "I" ? "selectedProjMediaBtn" : ""}`} 
                        onSubmit={()=>setSelectedMedia("I")}
                        title="project-photos"
                        icon={<CompanyIconEl />}
                    />

                    <Button
                        key="projectMediaVideoBtn"
                        buttonId ="projectMediaVideoBtn"
                        buttonConClassName=""
                        buttonClassName={`projectMediaBtn ${selectedMedia == "V" ? "selectedProjMediaBtn" : ""}`} 
                        onSubmit={()=>setSelectedMedia("V")}
                        title="project-videos"
                        icon={<CompanyIconEl />}
                    />
                </div>

                {selectedMedia === "I" && 
                <Fragment>
                {eachCrad.images && eachCrad.images.length > 0 ?
                <div className="projectMediaDisplayingCon">
                    {eachCrad.images.map((eachMedia, index)=>{
                      return (
                        <div id={`eachMedia_${index}`} className="projectMediaCard">
                            <img alt="" src={eachMedia} className='eachProjectMediaEl' />
                        </div>
                      )
                    })}
                </div>
                :
                <div className="noMediaCon">Images Not Available</div>
                }
                </Fragment>
                }

                {selectedMedia === "V" &&
                <Fragment>
                {eachCrad.videos && eachCrad.videos.length > 0 ?
                <div className="projectMediaDisplayingCon">
                    {eachCrad.videos.map((eachMedia, index)=>{
                      return (
                        <div id={`eachMedia_${index}`} className="projectMediaCard">
                            {/* <video alt="" type="video/mp4" controls src={eachMedia} className='eachProjectMediaEl' /> */}
                            <video controls className="eachProjectMediaEl" >
                              <source src={eachMedia} type="video/mp4" />
                            </video>
                        </div>
                      )
                    })}
                </div>
                :
                <div className="noMediaCon">Videos Not Available</div>
                }
                </Fragment>
                }

            </div>
        </div>
    </div>
  )
}
