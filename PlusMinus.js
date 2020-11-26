import React from 'react'
class PlusMinus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0

        }
    }
    handleMinus = () => {

        this.setState({

            count: this.state.count - 1


        })


    }

    handlePlus = () => {

        this.setState({
            count: this.state.count + 1

        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handlePlus}>Plus</button>
                <button onClick={this.handleMinus}>Minus</button>

            </div>
        )
    }
}
export default PlusMinus;
