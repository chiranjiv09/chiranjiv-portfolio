import React, { Fragment } from 'react';
import './expereince.css';
import { companyDetails } from '../../data';
import DetailsFolder from '../../commonElements/DetailsFolder';
import { arrowIcon } from '../../icons';

const Expereince = ({onSelectBlock, selectedItem, folderBlock}) => {

    return (
        <div className="expereinceMainCon">
                <div className='topFolderConForMobile'>
                    <p className='sideEachDropdownCon selectedsideEachDropdownCon'>{arrowIcon} _experience</p>
                    <DetailsFolder 
                        key="expericeFolder"
                        title="Experience"
                        keyName="experience"
                        onFunctionCall={onSelectBlock}
                        data={companyDetails}
                        section="experience"
                        folderBlock={folderBlock}
                        selectedItem={selectedItem}
                    />
                </div>

                {companyDetails.map((eachOne, ind)=>{
                    return (
                        <div key={`eachCard ${ind}`} id={`${eachOne.name}_block`} className="expereinceEachBox" >
                            <div className={`topCompanyDetailsBox ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                                <div className={`topCompanyDetailsLeftBox ${(ind%2) === 0 ? "flex-end" : "flex-start" }`} >
                                    <p className="comapanyNumber">.0{ind+1}</p>
                                    <p className="comapanyRoll">{eachOne.role}</p>
                                </div>

                                <div className="topCompanyDetailsMiddleBox">
                                    <img src={eachOne.logo} alt="" />
                                </div>

                                <div className={`topCompanyDetailsRightBox ${(ind%2) !== 0 ? "flex-end" : "flex-start" }`}>
                                    <p className="comapanyName">{eachOne.name}</p>
                                    <p className="comapanyJoiningDate">{eachOne.joinDate}</p>
                                </div>
                            </div>
        
                            <div className={`bottomCardHoldingCon ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                                {/* Card */}
                                <div 
                                    className={`CompanyDetailscardHoldingCon ${(ind%2) == 0 ? "ifCardIsLeftSide" : "ifCardIsRightSide"}`}
                                    style={{ justifyContent: (ind%2) != 0 ? "flex-start" : "" }} 
                                >
                                    <p className="comapanyRollForMobile">{eachOne.role}</p>
                                    <div className="CompanyDetailscard">
                                        {eachOne.keyPoints.map((eachPoint, index)=>{
                                            return(
                                                <div key={`point ${index}`} className="CompanycardContantCon">
                                                    <p className="companyDescNumber">//{index+1}</p>
                                                    <p className="companyDesc">{eachPoint}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
            
                                <div className={`CompanyCardRightSideSpace ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                                    <h2 className="companyNameVertical">{eachOne.name}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            

        </div>
    )
}

export default Expereince;