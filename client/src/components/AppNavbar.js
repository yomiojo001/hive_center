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
import RegisterModal from './auth/registerModal';
import SignInModal from './signInModal';
import Logout from './auth/Logout';

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
                            <RegisterModal />
                            <Logout />
                            <SignInModal />
                            
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
