import React, { Component } from 'react';
import { Jumbotron, Container,
    Nav, Navbar, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Name: ${this.name.value} Email: ${this.email.value} Attendants: ${this.select.value} Date: ${this.date.value} Subject: ${this.text.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {

        return(
            <React.Fragment>
                <Jumbotron fluid color="secondary">
                    <Container className="text-center text-white">
                        <h1 className="display-3">Cafe Cervantes</h1>
                        <h2 className="lead">The best way to start and end your day</h2>
                    </Container>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md" color="primary">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/OurStory">
                                        Our Story
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Menu">
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Venue">
                                        Venue
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/ContactUs">
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="ml-auto">
                                <Button className='headerButton' onClick={this.toggleModal}>
                                    <i className="fa fa-calendar fa-lg" /> Schedule Event
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Schedule an Event
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="name">Full Name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={input => this.name = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={input => this.email = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="select">Number of Attendants</Label>
                                <Input type="select" name="select" id="select"
                                    innerRef={input => this.select = input}>
                                    <option value="0">...</option>
                                    <option value="1">0-200</option>
                                    <option value="2">200-500</option>
                                    <option value="3">500+</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" name="date" id="date" placeholder="date placeholder"
                                    innerRef={input => this.date = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Subject</Label>
                                <Input type="textarea" name="text" id="text"
                                    innerRef={input => this.text = input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="secondary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
};

export default Header;