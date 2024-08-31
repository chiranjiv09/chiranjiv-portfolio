import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './contact.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import Button from '../../commonElements/Button';
import watsappImg from '../../images/whatsapp.png';

import { basicDetails, mailtoHref, onRedirectTo, watsappToHref } from '../../data';


export default function Contact() {
    const [state, handleSubmit, reset] = useForm("mpzebkoo", {
        data: {
          subject: 'Hello There...',
        }
      });

    const [data, setData] = useState({});
    const [error, setError] = useState([]);

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let errorList = [...error];
        if(errorList.includes(name)){
            let newArray = errorList.filter(each=> each !== name);
            setError(newArray);
        }
        
        setData(prev => ({...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        let errors = [];

        if(data.name === undefined || data.name === "" ){
            errors.push("name");
        }

        if(data.email === undefined || data.email === "" ){
            errors.push("email");
        }

        if(data.message === undefined || data.message === "" ){
            errors.push("message");
        }

        setError(errors);

        setTimeout(()=>{
            setError([]);
        }, 3000);

        if(errors.length === 0){
            // CALL Api Here...
            console.log(data);
            // handleSubmit(e);

            const response = await handleSubmit(e);
            if (response && response.ok && response.ok === true) {
              console.log("Form submitted successfully:", response);
            } else {
              console.error("Form submission failed:", response);
            }

                    
            if (state.succeeded) {
                console.log("Email Submited");
            }else{
                console.log("Email Failed");
            }

        }else{
            console.log("Missing Field: ", errors);
        }
    };
 

    return (
        <div className='ContactMinContainer'>
            <div className='ContactLeftContainer'>
                <form 
                    onSubmit={(e)=>onSubmit(e)} 
                    
                    action="https://formspree.io/f/mpzebkoo"
                    method="POST"
                >
                    <div className='inputFieldCon'>
                        <label className='inputLable'>_name:</label>
                        <input
                            required
                            style={{ borderColor: error.includes('name') ? "#F00" : "" }}
                            type="text"
                            onChange={onChange} 
                            placeholder='Enter Your Name...' 
                            name="name" 
                            className='inputField' 
                        />
                    </div>

                    <div className='inputFieldCon'>
                        <label className='inputLable'>_email:</label>
                        <input 
                            required
                            type="email" 
                            onChange={onChange} 
                            placeholder='Enter Your Email...' 
                            name="email" 
                            className='inputField' 
                            style={{ borderColor: error.includes('email') ? "#F00" : "" }}
                        />
                    </div>

                    <div className='inputFieldCon'>
                        <label className='inputLable'>_message:</label>
                        <textarea 
                            required
                            id='message'
                            name="message" 
                            className='inputField textAreaField' 
                            rows={5}
                            cols={100}
                            placeholder='Enter Your Message...'
                            onChange={onChange}
                            style={{ borderColor: error.includes('message') ? "#F00" : "" }}
                        />
                    </div>

                    {error.length !== 0 &&
                    <p className='errorMessage'>Fill The Required Fields...</p>
                    }

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <Button
                        key="submit"
                        buttonId ="submit"
                        buttonClassName="submitMessageBtn"
                        onSubmit={()=>("")}
                        type="submit"
                        title="submit-message"
                        name="submit"
                        value={0}
                        disabled={state.submitting}
                    />
                </form >
            </div>
            <div className='ContactRightContainer'>
                <h2 className='contactMeHeading'>Thankyou for going through my profile!</h2>
                <div className='contactMeSubHeading'>For Collaboration</div>

                <div className="contectFollowMeeBlock">
                    <p>Follow me</p>

                    <div className="iconHoldingContact">
                        <div className="iconHoldingCon">
                            <img onClick={()=>onRedirectTo(mailtoHref)} className='rightSideSocialIcons' src={emailImg} alt="" />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
