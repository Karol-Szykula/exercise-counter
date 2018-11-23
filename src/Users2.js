import React from 'react'

class Users2 extends React.Component {

    state = {
        users: null
    }

    componentDidMount() {

        fetch(`https://randomuser.me/api/?results=${this.props.numberOfResults || 5}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    users: data.results
                })
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.users &&
                        this.state.users.map ?
                        this.state.users.map((user) => (
                            <div
                                key={user.email}
                            >
                                {user.name.first} {user.name.last}
                            </div>
                        ))
                        :
                        'Ładowanie'


                }
            </div>
        )
    }
}

export default Users2