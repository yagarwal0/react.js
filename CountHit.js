import React, {Component} from 'react';

class CountHit extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        let {count} = this.state;
        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <span>
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default CountHit;
