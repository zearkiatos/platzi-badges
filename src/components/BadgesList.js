import React from 'react';
import './styles/badgeList/BadgeList.css';
class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <div className="container">
                                    <div className="badgeList-container row">
                                        <div className="col-1">
                                            <img src={badge.avatarUrl} alt="Avatar" className="img-floud circle-avatar" />
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
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;