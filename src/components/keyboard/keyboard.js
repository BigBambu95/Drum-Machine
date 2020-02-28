import React from 'react';

import KeyboardButton from '../keyboard-button';
import { bankOne, bankTwo } from '../../banks';

const Keyboard = ({ bank, playSound }) => {

    const currentBank = bank === '1' ? bankOne : bankTwo;

    return(
        <div className="keyboard">
            { currentBank.map(item => {
                return <KeyboardButton 
                            key={item.keyTrigger} 
                            item={item} 
                            playSound={playSound} 
                        />
            })}
        </div>
    )
}

export default Keyboard;