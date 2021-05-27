import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import OurStory from './OurStoryComponent';
import Menu from './MenuComponent';
import Venue from './VenueComponent';
import ContactUs from './ContactUsComponent';
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
                        path='/Home'
                        component={HomePage}
                    />
                    <Route
                        path='/OurStory'
                        render={() => <OurStory/>}
                    />
                    <Route
                        path='/Menu'
                        render={() => <Menu/>}
                    />
                    <Route
                        path='/Venue'
                        render={() => <Venue/>}
                    />
                    <Route
                        path='/ContactUs'
                        render={() => <ContactUs/>}
                    />
                    <Redirect to='/Home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);