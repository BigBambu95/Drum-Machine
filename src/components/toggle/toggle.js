import React from 'react';

const Toggle = ({ label, value, setValue }) => {

    const clazz = value ? 'toggle active' : 'toggle';

    return(
        <div className={clazz}>
            <span>{label}</span>
            <button className="toggle__btn" onClick={setValue}></button>
        </div>
    )
}

export default Toggle;