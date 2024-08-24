import React from 'react'
import { CompanyIconEl } from '../../icons'
import { companyDetails } from '../../data'

export default function MyExperince() {
    return (
        <div id={`${"Experience"}_block`}>
             <p className="eachSkillsBtn" >
                <hr className='eachSkillsBtnHrLine' />
                <CompanyIconEl className="companyIconEl" />
                Experince
            </p>

            {companyDetails.map((eachDetails, index)=>{
                return (
                    <div key={`profileExp_${index}`} className="profileExperinceCard">
                        <div className="profileExperinceCardLeftCon">
                            <h2 className="profileExperinceHeading">{eachDetails.name}</h2>
                            <p className="profileExperinceDate">{eachDetails.joinDate}</p>
                        </div>
                        <div className='profileExperinceCardRightCon'>
                            <h2 className="profileExperinceRoll">{eachDetails.role}</h2>

                            {eachDetails.keyPoints.map((eackPoint, ind)=>{
                                return(
                                    <p key={`profileExpPoint_${ind}`} className="profileExperincePoints">{eackPoint}</p>
                                )
                            })}
                            
                        </div>
                    </div>
                )
            })}
           
        </div>
    )
}
