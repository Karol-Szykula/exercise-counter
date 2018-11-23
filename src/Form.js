import React from 'react'

import TextField from 'material-ui/TextField';

class Form extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <TextField
                    id={'inputOne'}
                    type='text'
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <TextField
                    id={'inputTwo'}
                    type='text'
                    value={this.state.text}
                    disabled={true}
                />
            </div>
        )
    }
}

export default Form