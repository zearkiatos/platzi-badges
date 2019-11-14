import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import confLogo from '../assets/images/platziconf-logo.svg';
import Badge from './Badge';
import './styles/badgeDetails/BadgeDetails.css';
function BadgeDetails(props) {
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la Conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName={badge.firstName || 'FIRST_NAME'} lastName={badge.lastName || 'LAST_NAME'} jobTitle={badge.jobTitle || 'JOB_TITLE'} twitter={badge.twitter || 'TWITTER'} email={badge.email || 'EMAIL'} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary button-3d" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger danger-button-3d">Delete</button>
                                {ReactDOM.createPortal(<h1>Hola, realmente no estoy aquí</h1>,document.getElementById("modal"))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;