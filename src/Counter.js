import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startValue || 0
    }

    incNumber = () => {
        if (this.state.number >= this.props.max) return

        this.setState({ number: this.state.number + 1 })
    }
    decNumber = () => {
        if (this.state.number <= this.props.min) return

        this.setState({ number: this.state.number - 1 })
    }

    renderWarning = () => {

        if (this.state.number >= this.props.max)
            return 'Osiągnąłeś wartość max'

        if (this.state.number <= this.props.min)
            return 'Osiągnąłeś wartość min'

        // this.state.number === this.props.min ?
        //     'Osiągnąłeś wartość min'
        //     :
        //     this.state.number === this.props.max ?
        //         'Osiągnąłeś wartość max'
        //         :
        //         null
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <div>
                    <button
                        onClick={this.incNumber}
                    >
                        {'+'}
                    </button>
                    <button
                        onClick={this.decNumber}
                    >
                        {'-'}
                    </button>
                </div>
                <div>
                    {
                        this.renderWarning()
                    }
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    min: -5,
    max: 5
}

export default Counter
