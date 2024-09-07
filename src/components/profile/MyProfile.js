import React, { useState } from 'react'
import { CompanyIconEl, fileIcon, ginIcon, linkdinIcon, watsappIcon } from '../../icons'
import Button from '../../commonElements/Button'
import { basicDetails, onRedirectTo, watsappToHref } from '../../data'

export default function MyProfile({setIsResumeOpen}) {

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
                    key="Download Resume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn"
                    onSubmit={()=>setIsResumeOpen(true)}
                    title="Download Resume"
                    name="Resume"
                    value={0}
                    icon={fileIcon}
                />

                <Button
                    key="redirectToLinkDin"
                    buttonId ="redirectToLinkDin"
                    buttonClassName="resumeBtn profileIconBtns"
                    onSubmit={()=>onRedirectTo(basicDetails.linkedin)}
                    title=""
                    name=""
                    value={0}
                    icon={linkdinIcon}
                />

                <Button
                    key="redirectToGit"
                    buttonId ="redirectToGit"
                    buttonClassName="resumeBtn profileIconBtns"
                    onSubmit={()=>onRedirectTo(basicDetails.github)}
                    title=""
                    name=""
                    value={0}
                    icon={ginIcon}
                />

                <Button
                    key="redirectToWatsapp" 
                    buttonId ="redirectToWatsapp"
                    buttonClassName="resumeBtn profileIconBtns"
                    onSubmit={()=>onRedirectTo(watsappToHref)}
                    title=""
                    name=""
                    value={0}
                    icon={watsappIcon}
                />
            </div>
        </div>
    )
}
