import React from 'react'
import './education.css';
import { arrowIcon, companyIcon } from '../../icons';
import { educationDetails } from '../../data';
import DetailsFolder from '../../commonElements/DetailsFolder';

export default function Education({onSelectBlock, selectedItem, folderBlock}) {
  return (
    <div className="educationMainCon">
        <div className='topFolderConForMobile'>
            <p className='sideEachDropdownCon selectedsideEachDropdownCon'>{arrowIcon} _education</p>
            <DetailsFolder
                key="educationFolder"
                title="Education"
                keyName="education"
                onFunctionCall={onSelectBlock}
                data={educationDetails}
                section="education"
                folderBlock={folderBlock}
                selectedItem={selectedItem}
            />
          </div>

          {educationDetails.map((eachOne, index)=>{
            return (
                <div key={`education_${index}`} id={`${eachOne.name}_block`} className="educationEacgSectionCon">
                    <h3 className="educationCount" style={{marginBottom:"4px"}}>// .0{index+1}</h3>
                    <h3 className="educationCount">// {eachOne.name}_background</h3>
                    <p className='schooling'>{companyIcon} {eachOne.name}</p>
                    <p className='collegeName'>{eachOne.college}</p>
                    <p className='branchName'>{eachOne.branch}</p>
                    <p className='passedOutDate'>{eachOne.passedOut}</p>
                </div>
            )
        })}
    </div>
  )
}
