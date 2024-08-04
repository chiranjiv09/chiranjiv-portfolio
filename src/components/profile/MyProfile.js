import React from 'react'
import { CompanyIconEl, fileIcon, ginIcon, linkdinIcon } from '../../icons'
import Button from '../../commonElements/Button'

export default function MyProfile() {
    return (
        <div className="profileEachBlock" id={`${"About Me"}_block`}>
            <p className="eachSkillsBtn" >
                <hr className='eachSkillsBtnHrLine' />
                <CompanyIconEl className="companyIconEl" />
                Profile
            </p>

            <h1 className="myProfileDesignetion">I am a Software Developer</h1>
            <p className="myProfileObjective">A passionate Software Developer, I thrive on learning and building innovative solutions. I specialize in infrastructure, containerization, and Serverless/Cloud technologies, driven by a love for programming and community contribution.</p>
            <div className="profileResumeBtnsCon">
                <Button
                    key="Resume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn"
                    onSubmit={()=>("")}
                    title="Download Resume"
                    name="Resume"
                    value={0}
                    icon={fileIcon}
                />

                <Button
                    key="Resume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn profileIconBtns"
                    onSubmit={()=>("")}
                    title=""
                    name=""
                    value={0}
                    icon={linkdinIcon}
                />

                <Button
                    key="Resume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn profileIconBtns"
                    onSubmit={()=>("")}
                    title=""
                    name=""
                    value={0}
                    icon={ginIcon}
                />


            </div>
        </div>
    )
}
