import React from 'react';
import '../pages/styles/badgeNew/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../assets/images/platziconf-logo.svg';
import api from '../api';
class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading:true, error:null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading:false});
        }
        catch (error) {
            console.log(error);
            this.setState({loading:false,error:error});
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'} lastName={this.state.form.lastName || 'LAST_NAME'} jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} twitter={this.state.form.twitter || 'TWITTER'} email={this.state.form.email || 'EMAIL'}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} onSubmit = {this.handleSubmit}  />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;