import React from 'react'
import { CompanyIconEl } from '../../icons'
import { educationDetails } from '../../data'

export default function MyEducation() {
    return (
        <div id={`${"Education"}_block`}>
            <p className="eachSkillsBtn" >
                <hr className='eachSkillsBtnHrLine' />
                <CompanyIconEl className="companyIconEl" />
                Education
            </p>

            {educationDetails.map((eackOne, index)=>{
                return (
                    <div className='myEducationCard'>
                        <p className="myEducationUniversity">
                            <CompanyIconEl className="myEducationInnerIcon" />
                            {eackOne.name}
                        </p>
                        <p className="myEducationName">{eackOne.college}</p>
                        <p className="myEducationBranch">{eackOne.branch}</p>
                        <p className="myEducationDate">{eackOne.passedOut}</p>
                    </div>
                )
            })}
           
            
        </div>
    )
}
