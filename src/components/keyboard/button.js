import React from 'react';

class Button extends React.Component {
    constructor() {
        super();

        this.btn = React.createRef(null);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        const { item, playSound } = this.props;

        if(e.keyCode === item.keyCode) {
            playSound(this.btn.current, item.id);
        }
    }


    render() {

        const { item, playSound } = this.props;

        return(
            <button 
                ref={this.btn}
                className="btn" 
                onClick={() => playSound(this.btn.current, item.id)}
            >
                <audio src={item.url}></audio>
                {item.keyTrigger}
            </button>
        )
    }

}

export default Button;