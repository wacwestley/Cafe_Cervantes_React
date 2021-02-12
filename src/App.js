import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
                {/* <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Cafe Cervantes</NavbarBrand>
                </div>
                </Navbar> */}
                <Main />
            </div>
          </BrowserRouter>
        );
    }
}

export default App;