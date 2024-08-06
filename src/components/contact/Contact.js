import React from 'react';
import './contact.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import Button from '../../commonElements/Button';
import { watsappIcon } from '../../icons';


export default function Contact() {
    return (
        <div className='ContactMinContainer'>
            <div className='ContactLeftContainer'>
                <div className='inputFieldCon'>
                    <label className='inputLable'>_name:</label>
                    <input type="text" name="name" className='inputField' />
                </div>

                <div className='inputFieldCon'>
                    <label className='inputLable'>_email:</label>
                    <input type="email" name="email" className='inputField' />
                </div>

                <div className='inputFieldCon'>
                    <label className='inputLable'>_email:</label>
                    <textarea 
                        type="email" 
                        name="email" 
                        className='inputField textAreaField' 
                        rows={5}
                        cols={100}
                    />
                </div>

                <Button
                    key="submit"
                    buttonId ="submit"
                    buttonClassName="submitMessageBtn"
                    onSubmit={()=>("")}
                    title="submit-message"
                    name="submit"
                    value={0}
                />
            </div>

            <div className='ContactRightContainer'>
                <h2 className='contactMeHeading'>Thankyou for going through my profile!</h2>
                <div className='contactMeSubHeading'>For Collaboration</div>

                <div className="contectFollowMeeBlock">
                    <p>Follow me</p>

                    <div className="iconHoldingContact">
                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={emailImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={githubImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={leetcodeImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={linkdinImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <span className='rightSideSocialIcons'>
                                {watsappIcon}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
