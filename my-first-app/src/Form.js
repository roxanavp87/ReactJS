import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        }
        this.state = this.initialState;
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
        // console.log(this.state)
    }

    submit = e => {
        console.log(`On submit ${this.state.name}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    onChange={this.handleChange} />
                    <button>Submit</button>
            </form>
        )
    }
}

export default Form;