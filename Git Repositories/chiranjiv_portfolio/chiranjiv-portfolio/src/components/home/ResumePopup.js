import React from 'react';

import { popupCrossIcon } from '../../icons';
import { basicDetails } from '../../data';

export default function ResumePopup({setIsResumeOpen}) {

    const onMainConClick = (event) => {
        var myElement = document.getElementById('innerResumeContainer');

        if (myElement && !myElement.contains(event.target)) {
            console.log('clicked outside');
            setIsResumeOpen(false);
        }
    };


  return (
    <div className="projectPopupStaticCon" onClick={(e)=>onMainConClick(e)} >
        <div className="projectPopupinnerPopupCon resumePopupinnerPopupCon" id='innerResumeContainer'>
            <div className="projectPopupHeaderCon">
                    {/* <p className="projectPopupHeaderContent">
                      <img className='projectPopupGitIcon' src={} alt="" />
                      _Git link:
                      <span>{` https://{userid}.github.io/{reponame}`}</span>
                    </p> */}
                    <h3 className='resumePopupHeading'>Resume</h3>

                    <span className='popupCrossIcon' onClick={()=>setIsResumeOpen(false)}>
                      {popupCrossIcon}
                    </span>
            </div>

            <div className='resumeContainer'>
                <iframe title='resume'
                    src={basicDetails.resume} className="resumeFrame"
                />
            </div>
            
        </div>
    </div>
  )
}
