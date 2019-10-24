import React from 'react';
import confLogo  from '../assets/images/badge-header.svg'
class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div>
                <img src="https://s.gravatar.com/avatar/db9770705c9ea98b2185ea09179d588f?s=80" alt="Avatar" />
                <h1>Pedro <br /> Capriles </h1>
            </div>

            <div>
                <p>
                    FullStack Developer
                </p>
                <p>@zearkiatos</p>
            </div>

            <div>
                #platziconf
            </div>
        </div>;
    }

}

export default Badge;