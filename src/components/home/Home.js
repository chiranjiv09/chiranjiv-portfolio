import React, { Fragment, useEffect, useState } from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import watsappImg from '../../images/whatsapp.png';

import Button from '../../commonElements/Button';
import { fileIcon, GitIconBlack } from '../../icons';
import { basicDetails, mailtoHref, onRedirectTo, watsappToHref } from '../../data';
import ResumePopup from './ResumePopup';

const SocialMediaIcons = () => {

    return(
        <Fragment>
            <div onClick={()=>onRedirectTo(mailtoHref)} className="iconHoldingCon">
                <img title='email' className='rightSideSocialIcons' src={emailImg} alt="" />
            </div>

            <div title="github" className="iconHoldingCon">
                <GitIconBlack
                    key="Homegithub"
                    className="rightSideSocialIcons" 
                    onClick={()=>onRedirectTo(basicDetails.github)}
                />
            </div>

            <div className="iconHoldingCon">
                <img title='leetcode' onClick={()=>onRedirectTo(basicDetails.leetcode)} className='rightSideSocialIcons' src={leetcodeImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img title='linkedin' onClick={()=>onRedirectTo(basicDetails.linkedin)} className='rightSideSocialIcons' src={linkdinImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img title='watsapp' onClick={()=>onRedirectTo(watsappToHref)} className='rightSideSocialIcons' src={watsappImg} alt="" />
            </div>
        </Fragment>
    )
}

const Home = () => {
    const texts = basicDetails.workingRoles;
    const [currentText, setCurrentText] = useState(texts[0]);
    const [isResumeOpen, setIsResumeOpen] = useState(false);


    useEffect(() => {
        const intervalId = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * texts.length);
          setCurrentText(texts[randomIndex]);
        }, 1500);
    
        return () => clearInterval(intervalId);
    }, [texts]);

    return (
        <div className="homeMianCon">

            {isResumeOpen && <ResumePopup setIsResumeOpen={setIsResumeOpen} />}

            <div className="homeLeftSideCon">
                <span className="leftSideSpan">Hi all. I am</span>
                <h2 className="leftSideUsername line-1 anim-typewriter">{basicDetails.name}</h2>

                <div className="homeRightSideConForMobile">
                    <img alt="" src={basicDetails.profileImage} className="profileImage" />
                </div>

                <p className="leftSideUserRole">&gt; <span style={{color : currentText == "Java Full-Stack" ? "#43D9AD" : currentText == "Web" ? "#C99FFF" : "#8C99FF" }}>{currentText}</span> Developer</p>

                <p className="leftSideObjective">{basicDetails.careerObjective}</p>
                
                <Button
                    key="HomeResume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn"
                    onSubmit={()=>setIsResumeOpen(true)}
                    title="Resume"
                    name="Resume"
                    value={0}
                    icon={fileIcon}
                />
            </div>

            <div className="homeRightSideCon">
                {/* <iframe src={basicDetails.profileImage} className="profileImage" allow="autoplay"></iframe> */}

                <img 
                    alt="" 
                    src={basicDetails.profileImage} className="profileImage" 
                />
                <div className="siderIconsCon">
                    <span>Follow me---</span>
                    <SocialMediaIcons />
                </div>
            </div>

            <div className="siderIconsConForMobile">
                <p>Follow me</p>

                <div className="iconHoldingConForMobile">
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
    );
};

export default Home;