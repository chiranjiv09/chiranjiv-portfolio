import React from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import linkdinImg from '../../images/linkdin.png';
import leetcodeGrayImg from '../../images/leetcodeGray.png';
import watsappImg from '../../images/whatsapp.png';

import { basicDetails, mailtoHref, onRedirectTo, watsappToHref } from '../../data';

const Footer = () => {
    return (
        <footer className="footerMianCon">
            <p className="footerFindMeText">find me in:</p>
            <div className="footerIconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.github)} className='footerSocialIcons' src={githubImg} alt="" />
            </div>
            <div className="footerIconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.linkedin)} className='footerSocialIcons' src={linkdinImg} alt="" />
            </div>
            <div className="footerIconHoldingCon">
                <img onClick={()=>onRedirectTo(basicDetails.leetcode)} className='footerSocialIcons' src={leetcodeGrayImg} alt="" />
            </div>

            <div className="footerIconHoldingCon">
                <img onClick={()=>onRedirectTo(watsappToHref)} className='footerSocialIcons' src={watsappImg} alt="" />
            </div>

            <div onClick={()=>onRedirectTo(mailtoHref)} className="footerFindMeText footerCornerEmailBox">
                {basicDetails.email}
                <img src={emailImg} alt="" />
            </div>
        </footer>
    );
};

export default Footer;