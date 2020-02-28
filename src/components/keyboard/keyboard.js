import React from 'react';

import Button from './Button';
import { bankOne, bankTwo } from '../../banks';

const Keyboard = ({ bank, playSound }) => {

    const currentBank = bank === '1' ? bankOne : bankTwo;

    return(
        <div className="keyboard">
            { currentBank.map(item => {
                return <Button 
                            key={item.keyTrigger} 
                            item={item} 
                            playSound={playSound} 
                        />
            })}
        </div>
    )
}

export default Keyboard;