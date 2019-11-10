import React from 'react';
import './styles/badgeList/BadgeList.css';
import {Link} from 'react-router-dom';
import md5 from 'md5';
class BadgesList extends React.Component {
    render() {
        if(this.props.badges.length === 0 ){
            return (
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <Link to="/badges/new" className="btn btn-primary">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map((badge) => {
                        const email = badge.email;
                        const hash = md5(email);
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                    <div className="container">
                                        <div className="badgeList-container row">
                                            <div className="col-1">
                                                <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt={badge.firstName+" "+badge.lastName} className="img-floud circle-avatar" />
                                            </div>
                                            <div className="col-11">
                                                <h5 className="font-weight-bold">{badge.firstName} {badge.lastName}</h5>
                                                <p>
                                                    <i className="fab fa-twitter twitter-color"></i> <span className="twitter-color">@{badge.twitter}</span>
                                                </p>
                                                <p>
                                                    {badge.jobTitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;