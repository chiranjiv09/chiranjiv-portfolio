

import React from "react";

const Button = ({ buttonId, buttonConClassName, buttonClassName, onSubmit, 
                title, value, name, icon, toolTip, type, disabled }) => {

    return(
        <div className={buttonConClassName}>
            <button 
                id={buttonId}
                className={buttonClassName}
                onClick={(e)=>onSubmit ? onSubmit(e) : ""}
                value={value}
                name={name}
                title={toolTip ? toolTip : ""}
                type={type}
                disabled={disabled}
            >
                {title}
                {icon && icon !== "" ? icon : ""}
            </button>
            
        </div>
    )
};

export default Button;