import React, { Fragment } from 'react'
import Button from './Button'
import { companyIcon, redFolderIcon, singleLineArrowIcon } from '../icons'

export default function DetailsFolder({title, keyName, onFunctionCall, data, section, folderBlock, selectedItem }) {
  return (
    <div className="sideEachDropdownBottomFoldersCon" >                    
        <Button
            key={`_${keyName}_dropwon_btn`}
            buttonId ={`_${keyName}_dropwon_btn`}
            buttonClassName="sideEachDropdownCon mainFolderHeading"
            onSubmit={()=>onFunctionCall(undefined, undefined, keyName)}
            title={title}
            name=""
            value=""
            icon={<Fragment><span>{redFolderIcon}</span> <span style={{transform: folderBlock[keyName] ? "rotate(180deg)" : "" }} >{singleLineArrowIcon}</span></Fragment>}
        />

        {folderBlock[keyName] &&
        <div className="showingComapnysCon">
            {data.map((eachCmny, eachInd)=>{
                return(
                    <p key={`cmpny_${eachInd}`} className={`showingComapny ${selectedItem[section] == eachCmny.name ? "selectedsideEachDropdownCon" : "" }`} onClick={()=>onFunctionCall(eachCmny.name, section)}>
                        <span style={{opacity: selectedItem[section] == eachCmny.name ? "1" : "0.5" }} className="nxtCompanyIcon">{companyIcon}</span> 
                        <span className={`${selectedItem[section] == eachCmny.name ? "selectedsideEachDropdownCon" : "" }`}>{eachCmny.name}</span>
                    </p>
                )
            })}
        </div>
        }
    </div>
  )
}
