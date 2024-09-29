import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { onMainConClick } from '../data';
import { blackPopupCrossIcon } from '../icons';

export default function ImagesPopup({imagePopup, onImagePopup}) {

  let urlList = imagePopup && imagePopup.urlList && imagePopup.urlList.length > 0 ?
                imagePopup.urlList : [];

  return (
    <div className="projectPopupStaticCon" onClick={(e)=>onMainConClick(e, 'innerImagesContainer', onImagePopup, "CLOSE" )} >
        <div className="imagesPopupinnerPopupCon" id='innerImagesContainer'>
            <span className='imagesPopupCrossIcon' onClick={()=>onImagePopup("CLOSE")}>
              {blackPopupCrossIcon}
            </span>
            
            <div className='resumeContainer'>
                <Carousel 
                  selectedItem={imagePopup.selectedIndex}
                  onChange={(index) => onImagePopup("INDEX", index)}
                  autoPlay
                  infiniteLoop
                  showThumbs
                  showStatus={false}
                  showIndicators 
                  dynamicHeight 
                  interval={3000}
                  transitionTime={500}
                >
                  {urlList.map((eachImg, index)=>{
                    return(
                        <img 
                            key={`projImgs_${index}`} 
                            src={eachImg} 
                            alt={`Image ${index+1}`} 
                            className="iframeResumeClassTag" 
                        />
                    )
                  })}        
                </Carousel>

                {/* <div>
                  {urlList.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onImagePopup("INDEX", index)}
                      style={{
                        padding: '10px',
                        marginRight: '10px',
                        backgroundColor: imagePopup.selectedIndex === index ? 'blue' : 'gray',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                      }}
                    >
                      Show Image {index + 1}
                    </button>
                  ))}
                </div> */}

            </div>
        </div>
    </div>
  )
};
