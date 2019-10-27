import React from 'react';
import '../components/styles/badgeForm/BadgeForm.css';
class BadgeForm extends React.Component {
    state = {};
    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = (e) => {
        console.log("Button was clicked");
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log("Form was submit");
    }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"  value={this.state.firstName} />
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>
                        <label>email</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="email" value={this.state.email} />
                        <label>Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;