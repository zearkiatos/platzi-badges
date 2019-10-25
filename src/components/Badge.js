import React from 'react';
import confLogo  from '../assets/images/badge-header.svg';
import "./styles/badge/Badge.css";
class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://s.gravatar.com/avatar/db9770705c9ea98b2185ea09179d588f?s=80" alt="Avatar" />
                <h1>Pedro <br /> Capriles </h1>
            </div>

            <div className="Badge__section-info">
                <h3>
                    FullStack Developer
                </h3>
                <div>@zearkiatos</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>;
    }

}

export default Badge;