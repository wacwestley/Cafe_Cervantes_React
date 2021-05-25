import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render(){

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route
                        path='/home'
                        component={HomePage}
                    />
                    <Route
                        path='/menu'
                        render={() => <Menu/>}
                    />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);