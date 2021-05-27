import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Venue = () => {
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Venue</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Venue</h2>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Venue;