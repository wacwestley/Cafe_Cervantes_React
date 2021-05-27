import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Story</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Our Humble Beginnings</h2>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default OurStory;