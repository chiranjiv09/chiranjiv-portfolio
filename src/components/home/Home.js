import React, { Fragment, useEffect, useState } from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import watsappImg from '../../images/whatsapp.png';

import Button from '../../commonElements/Button';
import { fileIcon } from '../../icons';
import { basicDetails, mailtoHref, onRedirectTo, watsappToHref } from '../../data';
import ResumePopup from './ResumePopup';

const SocialMediaIcons = () => {

    return(
        <Fragment>
            <div onClick={()=>onRedirectTo(mailtoHref)} className="iconHoldingCon">
                <img className='rightSideSocialIcons' src={emailImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.github)} className='rightSideSocialIcons' src={githubImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.leetcode)} className='rightSideSocialIcons' src={leetcodeImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.linkedin)} className='rightSideSocialIcons' src={linkdinImg} alt="" />
            </div>

            <div className="iconHoldingCon">
                <img onClick={()=>onRedirectTo(watsappToHref)} className='rightSideSocialIcons' src={watsappImg} alt="" />
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
                    <img alt="" src="https://w0.peakpx.com/wallpaper/454/815/HD-wallpaper-naruto-art-fictional-character-thumbnail.jpg" className="profileImage" />
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
                <img alt="" src="https://w0.peakpx.com/wallpaper/454/815/HD-wallpaper-naruto-art-fictional-character-thumbnail.jpg" className="profileImage" />
                <div className="siderIconsCon">
                    <span>Follow me---------</span>
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