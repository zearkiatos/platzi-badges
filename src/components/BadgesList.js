import React from 'react';
import './styles/badgeList/BadgeList.css';
import { Link } from 'react-router-dom';
import md5 from 'md5';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badges, query]);

    return {query,setQuery,filteredBadges};
}
function BadgesList(props) {
    const badges = props.badges;

    const {query, setQuery,filteredBadges} = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges </label>
                    <input type="text" className="form-control" value={query} onChange={(e) => {
                        setQuery(e.target.value);
                    }} />
                </div>
                <h3>No encontramos ningún badge</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                    </Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges </label>
                <input type="text" className="form-control" value={query} onChange={(e) => {
                    setQuery(e.target.value);
                }} />
            </div>
            <ul className="list-unstyled">
                {
                    filteredBadges.map((badge) => {
                        const email = badge.email;
                        const hash = md5(email);
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <div className="container">
                                        <div className="badgeList-container row">
                                            <div className="col-1">
                                                <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt={badge.firstName + " " + badge.lastName} className="img-floud circle-avatar" />
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
        </div>


    );
}

export default BadgesList;