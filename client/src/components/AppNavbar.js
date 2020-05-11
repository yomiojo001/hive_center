import React, { Component, Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
    NavItem
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/registerModal';
import SignInModal from './auth/signInModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

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
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem className="mr-3">
                    <span className="navbar-text mt-2"></span>
                    <strong>{ user ? `Welcome ${user.name}` : '' }</strong>
                </NavItem>
                <Logout />
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <RegisterModal />
                <SignInModal />
            </Fragment>
        )


        return (
            <div>
               <Navbar color="light" light expand="sm" fixed="top">
                    <Container>
                        <NavbarBrand href="/"><span style={{color: '#22BFBF'}}>HIVE</span><small>center</small></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavLink href="/" className="mr-5" active>Home</NavLink> <NavLink href="/about" className="mr-5">About</NavLink> <NavLink href="/venue" className="mr-5">Venue</NavLink> 
                                { isAuthenticated ? authLinks: guestLinks}
                            
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar)
