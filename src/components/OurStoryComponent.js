import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className='container mb-3'>
            <div className='row'>
                <div className='col'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Story</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Our Humble Beginnings</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h3>The Beginning</h3>
                    <p>In the beginning... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col-6'>
                    <img src='assets/images/storyChattanooga.jpg' alt='Overlooking downtown Chattanooga' className='img-fluid rounded'/>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-6'>
                    <img src='assets/images/storyPassion.jpg' alt='Three pour over coffees being brewed' className='img-fluid rounded'/>
                </div>
                <div className='col-6'>
                    <h3>Our Passion</h3>
                    <p>Finding better ways to bring people together... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-6'>
                    <h3>Our coffee</h3>
                    <p>100% arabica... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col-6'>
                    <img src='assets/images/storyCoffee.jpg' alt='coffee beans in various grind levels' className='img-fluid rounded'/>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-6'>
                    <img src='assets/images/storyVenue.jpg' alt='confetti falling during a packing concert venue' className='img-fluid rounded'/>
                </div>
                <div className='col-6'>
                    <h3>The venue</h3>
                    <p>Holding up to xyz people... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default OurStory;