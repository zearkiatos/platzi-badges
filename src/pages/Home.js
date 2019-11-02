import React from 'react';
import '../pages/styles/home/Home.css';
import PlatziConfLogo from '../assets/images/platziconf-logo.svg';
import Astronauts from '../assets/images/astronauts.svg';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="home-background">
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div class="align-right">
                                    <img src={PlatziConfLogo} class="img-fluid" />
                                    <h1 class="home-title">
                                        PRINT YOUR BADGES
                                    </h1>
                                    <p>
                                        The easiest way to manage your <br /> conference
                                    </p>
                                    <Link to="/badges" className="btn btn-primary button-3d">
                                        Start now
                                    </Link>
                                </div>
                            </div>
                            <div class="col-9" align="center">
                                <div>
                                    <img src={Astronauts} class="img-fluid astronauts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;