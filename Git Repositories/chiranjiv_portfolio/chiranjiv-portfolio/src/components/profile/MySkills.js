import React from 'react'
import { CompanyIconEl } from '../../icons'
import { skillsDetails } from '../../data'

export default function MySkills() {
    return (
        <div id={`${"Skills"}_block`}>
            <p className="eachSkillsBtn" >
                <hr className='eachSkillsBtnHrLine' />
                <CompanyIconEl className="companyIconEl" />
                Skills
            </p>

            {skillsDetails.map((eachSkill, index)=>{
                return (
                    <div key={`mySkillCard_${index}`} className="mySkillsCard">
                        <h2 className="mySkillsCardHeading">// {eachSkill.name}</h2>
                        <p className="mySkillsCardContant">
                            {eachSkill.technologies.map((eachTech, ind)=>{
                                return (
                                    <span key={`eachSkillPoint_${ind}`}>{`${eachTech.name}, `}</span>
                                )
                            })}
                        </p>
                    </div>
                )
            })}
          
        </div>
    )
}
