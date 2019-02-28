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
        console.log(`Form has been submitted`);
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value= {this.state.name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={this.state.job}
                    onChange={this.handleChange} />
                    <button>Submit</button>
            </form>
        )
    }
}

export default Form;