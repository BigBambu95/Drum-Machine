import React from 'react';

import Toggle from '../toggle';

const SettingsPanel = ({ 
    changeBank, bankToggleFlag, volume, changeVolume 
}) => {
    return(
        <div className="settings-panel">
            <div className="volume-slider">
                <input type="range" step="0.01" min="0" max="1" value={volume} onChange={changeVolume} />
            </div>
            <Toggle 
                setValue={changeBank} 
                value={bankToggleFlag}
                label="Bank"
            />
        </div>
    )
}

export default SettingsPanel;