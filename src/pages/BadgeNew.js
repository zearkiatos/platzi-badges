import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/styles/badgeNew/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../assets/images/badge-header.svg';
class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Pedro" lastName="Capriles" jobTitle="FullStack Developer" twitter="@zearkiatos" avatarUrl="https://s.gravatar.com/avatar/db9770705c9ea98b2185ea09179d588f?s=80" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;