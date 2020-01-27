import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
} from 'reactstrap';
import RegisterModal from './registerModal';
import SignInModal from './signInModal';

export default class AppNavbar extends Component {
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }    

    constructor(props) {
        super(props)
        this.state = {
             isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    

    render() {
        return (
            <div>
               <Navbar color="light" light expand="sm" fixed="top">
                    <Container>
                        <NavbarBrand href="/"  >HIVE<small>center</small></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavLink href="#" className="mr-5">Home</NavLink> <NavLink href="#" className="mr-5">Venue</NavLink> <NavLink href="#" className="mr-5">Company</NavLink>
                            {/* <Button color="info" className="mr-3 btn-sm">Register</Button>
                            <Button color="info" outline className="btn-sm">Sign in</Button> */}
                            <RegisterModal />
                            <SignInModal />
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
