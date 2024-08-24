import React, { Fragment, useState } from 'react';
import './home.css';
import Button from '../../commonElements/Button';
import { crossIcon, menuBarIcon } from '../../icons';
import { basicDetails } from '../../data';

const BottonsBlock = ({block, onSelect, setIsMenuBar}) => {
    return (
        <Fragment>
            <p className="headerUserName">{basicDetails.name}<span className="mobileHeaderCrossIcon" onClick={()=>setIsMenuBar(false)}>{crossIcon}</span></p>
            <Button
                key="_hello"
                buttonId ="_hello"
                buttonClassName={`topHeaderBtn ${block == "Hello" ? "selectedTopHelloBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_hello"
                name="hello"
                value={"Hello"}
            />

            <Button
                key="_experience"
                buttonId ="_experience"
                buttonClassName={`topHeaderBtn ${block == "Experience" ? "selectedTopExperinceBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_experience"
                name="experience"
                value={"Experience"}
            />

            <Button
                key="skills"
                buttonId ="skills"
                buttonClassName={`topHeaderBtn ${block == "Skill" ? "selectedTopHeaderBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_skill"
                name="skill"
                value={"Skill"}
            />

            <Button
                key="_education"
                buttonId ="_education"
                buttonClassName={`topHeaderBtn ${block == "Education" ? "selectedTopEducationBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_education"
                name="education"
                value={"Education"}
            />

            <Button
                key="_projects"
                buttonId ="_projects"
                buttonClassName={`topHeaderBtn ${block == "Projects" ? "selectedTopHeaderBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_projects"
                name="projects"
                value={"Projects"}
            />

            <Button
                key="_profile"
                buttonId ="_profile"
                buttonClassName={`topHeaderBtn ${block == "Profile" ? "selectedTopHeaderBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_profile-overview"
                name="profile"
                value={"Profile"}
            />

            <Button
                key="_contact-me"
                buttonId ="_contact-me"
                buttonConClassName="contactBtn"
                buttonClassName={`topHeaderBtn contactBtnForMobile ${block == "Contact-me" ? "selectedTopHeaderBtn" : "" }`}
                onSubmit={(e)=>onSelect(e)}
                title="_contact-me"
                name="contact-me"
                value={"Contact-me"}
            />


            
        </Fragment>
    )
};

const Header = ({block, onSelect}) => {

    const [isMenuBar, setIsMenuBar ] = useState(false);

    const onSelectButtons = (e) => {
        if(isMenuBar){
            onSelect(e);
            setIsMenuBar(false);
        }else{
            onSelect(e);
        }
    };

    return (
        <Fragment>
            <header className="mobileHeaderMainCon">
                <p className="mobileHeaderUserName">{basicDetails.name}</p>
                <span className="mobileHeaderMenuBar" onClick={()=>setIsMenuBar(true)} >{menuBarIcon}</span>
            </header>

            <header className="headerMianCon">
                <BottonsBlock key="btnsForLargeDevices" block={block} onSelect={onSelectButtons} setIsMenuBar={setIsMenuBar} />
            </header>

            {isMenuBar &&
            <header className="headerMianForBobileCon">
                <BottonsBlock key="btnsForSmallDevices" block={block} onSelect={onSelectButtons} setIsMenuBar={setIsMenuBar} />
            </header>
            }
        </Fragment>
    );
};

export default Header;