import React from 'react'
import './education.css';
import { companyIcon } from '../../icons';
import { educationDetails } from '../../data';

export default function Education() {
  return (
    <div className="educationMainCon">
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
