import React from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import linkdinImg from '../../images/linkdin.png';
import leetcodeGrayImg from '../../images/leetcodeGray.png';
import watsappImg from '../../images/whatsapp.png';

import { basicDetails, mailtoHref, onRedirectTo, watsappToHref } from '../../data'; 
import { ginIcon } from '../../icons';

const Footer = () => {
    return (
        <footer className="footerMianCon">
            <p className="footerFindMeText">find me in:</p>
            <div className="footerIconHoldingCon"> 
                <span title="github" onClick={()=>onRedirectTo(basicDetails.github)} className='footerSocialIcons'>
                    {ginIcon}
                </span>
            </div>
            <div className="footerIconHoldingCon">
                <img title='linkedin' onClick={()=>onRedirectTo(basicDetails.linkedin)} className='footerSocialIcons' src={linkdinImg} alt="" />
            </div>
            <div className="footerIconHoldingCon">
                <img title='leetcode' onClick={()=>onRedirectTo(basicDetails.leetcode)} className='footerSocialIcons' src={leetcodeGrayImg} alt="" />
            </div>

            <div className="footerIconHoldingCon">
                <img title='Watsapp' onClick={()=>onRedirectTo(watsappToHref)} className='footerSocialIcons' src={watsappImg} alt="" />
            </div>

            <div title='email' onClick={()=>onRedirectTo(mailtoHref)} className="footerFindMeText footerCornerEmailBox">
                {basicDetails.email}
                <img src={emailImg} alt="" />
            </div>
        </footer>
    );
};

export default Footer;