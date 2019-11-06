import React from 'react';
import '../pages/styles/badges/Badges.css';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import confLogo from '../assets/images/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api';
class Badges extends React.Component {

    constructor(props) {
        super(props);
        console.log("1. Constructor()");
        this.state = {
            data: [],
        };
    }

    state = {
        data: undefined,
        loading: true,
        error:null
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async ()=>{
        this.setState({loading:true, error:null});

        try{
            const data = await api.badges.list();
            this.setState({loading:false, data:data})
        }
        catch(error){
            this.setState({loading:false, error: error})
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        console.log({
            props: this.props,
            state: this.state
        });
    }

    componentWillUnmount(){
        console.log("6. componentWillUnmount");
        clearTimeout(this.timeoutId);
    }

    render() {
        if(this.state.loading == true){
            return <PageLoading />;
        }

        if(this.state.error){
            return <PageError error={this.state.error} />;
        }
        console.log("2/4. render()");
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="" src={confLogo} alt="ConfLogo" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="Badge__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary button-3d">
                                New Badge
                            </Link>
                        </div>
                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;