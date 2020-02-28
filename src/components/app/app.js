import React from 'react';

import Keyboard from '../keyboard';
import Display from '../display';
import SettingsPanel from '../settings-panel';
import Toggle from '../toggle';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            power: true,
            display: null,
            volume: 0.35,
            bank: '1',
        }

        this.playSound = this.playSound.bind(this);
        this.setPower = this.setPower.bind(this);
        this.changeBank = this.changeBank.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
    }

    playSound(item, id) {
        const { volume, power } = this.state; 
        if(!power) return false;

        item.children[0].volume = volume;

        item.children[0]
            .play()
            .then(() => this.setState({
                display: id
            }))
            .catch(err => console.error(err));       
    }

    changeBank() {
        const { bank, power } = this.state;

        if(!power) return false;

        this.setState({
            bank: bank === '1' ? '2' : '1',
            display: bank === '1' ? 'Smooth Piano Kit' : 'Heater Kit'
        });
    }

    setPower() {
        this.setState((state) => {
            return {
                power: !state.power,
                display: ''
            }
        })
    }

    changeVolume(e) {
        const { power } = this.state;

        if(!power) return false;

        this.setState({
            volume: e.target.value,
            display: 'Volume: ' + Math.round(e.target.value * 100)
        });

        setTimeout(() => this.clearDisplay(), 1000);
    }

    clearDisplay() {
        this.setState({
            display: ''
        });
    }

    render() {

        const { bank, display, power, volume } = this.state;

        const bankToggleFlag = bank === '1' ? false : true;

        return(
            <div className="drum-machine">
                <section className="left-section">
                    <Keyboard bank={bank} playSound={this.playSound} />
                </section>
                <section className="right-section">
                    <Toggle value={power} setValue={this.setPower} label="Power" />
                    <Display display={display} />
                    <SettingsPanel 
                        changeBank={this.changeBank} 
                        bankToggleFlag={bankToggleFlag} 
                        volume={volume}
                        changeVolume={this.changeVolume}
                    />
                </section>
            </div>
        )
    }

}

export default App;