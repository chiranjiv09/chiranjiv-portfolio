import React from 'react';

import { popupCrossIcon } from '../../icons';
import { basicDetails, onMainConClick } from '../../data';

export default function ResumePopup({setIsResumeOpen}) {

  return (
    <div className="projectPopupStaticCon" onClick={(e)=>onMainConClick(e, 'innerResumeContainer', setIsResumeOpen, false )} >
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
                {/* <iframe title='resume'
                    src={basicDetails.resume} className="resumeFrame"
                /> */}
                <iframe src="https://drive.google.com/file/d/12FHzn-CN7RMHYz_sRhOKCq8RNXS42gqm/preview" className="iframeResumeClassTag" allow="autoplay"></iframe>
            </div>
            
        </div>
    </div>
  )
}
