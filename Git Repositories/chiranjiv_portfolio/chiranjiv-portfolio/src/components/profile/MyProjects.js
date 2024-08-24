import React from 'react'
import { CompanyIconEl } from '../../icons'
import { projectDetails } from '../../data'

export default function MyProjects() {
    return (
        <div id={`${"Projects"}_block`}>
            <p className="eachSkillsBtn" >
                <hr className='eachSkillsBtnHrLine' />
                <CompanyIconEl className="companyIconEl" />
                Projects
            </p>

            {projectDetails.map((eachDetails, index)=>{
                return (
                    <div key={`profileProj_${index}`} className="profileExperinceCard">
                        <div className="profileProjectCardLeftCon">
                            <h2 className="profileExperinceHeading myProjectName">{eachDetails.name}</h2>
                        </div>
                        <div className='profileProjectCardRightCon'>

                            <p className="myProjectTechStack">
                                <span>Tech Stack :- </span>
                                {eachDetails.technologiesUsed.map((eackPoint, ind)=>{
                                    return(
                                        <span key={`profileProjectPoint_${ind}`}>{eackPoint.name}, </span>
                                    )
                                })}
                            </p>

                            <p className="myProjectDescription">{eachDetails.description}</p>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
