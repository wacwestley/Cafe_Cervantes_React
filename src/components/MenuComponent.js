import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Menu</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <MuiAccordion square className='menuAccordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <MuiAccordionSummary className='menuHeader' aria-controls="panel1d-content" id="panel1d-header">
                            <Typography><h3>Specialty Drinks</h3></Typography>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails className='menuBody'>
                            <div className='container menuContainer'>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Espresso</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2.25</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Drip coffee</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Cold Brew</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>3 / 3.50 / 4</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Americano</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2.25 / 2.75 / 3.25</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Capppucino</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Latte</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Mocha</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Black Tea</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Green Tea</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Chai Tea</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>2.50 / 3 / 3.75</p>
                                        </div>
                                    </div>
                                </Typography>
                            </div>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square className='menuAccordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <MuiAccordionSummary className='menuHeader' aria-controls="panel2d-content" id="panel2d-header">
                            <Typography><h3>Breakfast</h3></Typography>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails className='menuBody'>
                            <div className='container menuContainer'>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Steel Cut Oats</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Fruit and Yogurt Parfait</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Housemade Granola</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Egg and Avocado Toast</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>5.50</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Sausage Melt</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>4</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Yogurt Bowl</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </Typography>
                            </div>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square className='menuAccordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <MuiAccordionSummary className='menuHeader' aria-controls="panel3d-content" id="panel3d-header">
                            <Typography><h3>Lunch</h3></Typography>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails className='menuBody'>
                            <div className='container menuContainer'>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>BLT</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>8</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Chicken Salad Wrap</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>7</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Hummus Wrap</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>7</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Cervantes Salad</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>8</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Paleo Lunch</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>7.50</p>
                                        </div>
                                    </div>
                                </Typography>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>Vegetarian Lunch</p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p>7.50</p>
                                        </div>
                                    </div>
                                </Typography>
                            </div>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                </div>
            </div>
        </div>

        /* <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Menu</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card className='cardMenu'>
                        <Button className='menuButton' id='toggler1'>
                            <CardHeader className='cardHeader'>
                                <h3>Specialty Drinks</h3>
                            </CardHeader>
                        </Button>
                        <UncontrolledCollapse defaultOpen toggler='#toggler1'>
                            <CardBody className='cardBody'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Espresso</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2.25</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Drip coffee</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Cold Brew</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>3 / 3.50 / 4</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Americano</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2.25 / 2.75 / 3.25</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Capppucino</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Latte</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Mocha</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>4.50</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Black Tea</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Green Tea</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2 / 2.50 / 2.75</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Chai Tea</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>2.50 / 3 / 3.75</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card className='cardMenu'>
                        <Button className='menuButton' id='toggler2'>
                            <CardHeader className='cardHeader'>
                                <h3>Breakfast</h3>
                            </CardHeader>
                        </Button>
                        <UncontrolledCollapse toggler='#toggler2'>
                            <CardBody className='cardBody'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Steel Cut Oats</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Fruit and Yogurt Parfait</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Housemade Granola</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Egg and Avocado Toast</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>5.50</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Sausage Melt</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>4</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Yogurt Bowl</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card className='cardMenu'>
                        <Button className='menuButton' id='toggler3'>
                            <CardHeader className='cardHeader'>
                                <h3>Lunch</h3>
                            </CardHeader>
                        </Button>
                        <UncontrolledCollapse toggler='#toggler3'>
                            <CardBody className='cardBody'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>BLT</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>8</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Chicken Salad Wrap</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>7</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Hummus Wrap</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>7</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Cervantes Salad</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>8</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Paleo Lunch</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>7.50</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='pMenu'>Vegetarian Lunch</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>7.50</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
            </div>
        </div> */
    )
}

export default Menu;