import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Nav,
    NavItem,
    NavLink,
    Input,
    Container,
    Alert
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';



class LoginModal extends Component{
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            // Check for login error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else{
                this.setState({ msg: null });
            }
        }

        // if authenticated close modal
        if (this.state.modal) {
            if (isAuthenticated){
                this.toggle();
            }
        }
    }





    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e =>{
        e.preventDefault();
        
        const { email, password } = this.state;

        const user = {
            email,
            password
        }
        
        // Attempt to login
        this.props.login(user)
    }



    render(){
        return(
            <div>
                <Button
                color="info" outline className="mt-1 btn-sm"
                onClick={this.toggle}
                >Sign In</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <button type="button" style={{border:"0", backgroundColor:"#fff",fontSize:"1.8rem",color:"ccc" }} onClick={this.toggle} className="ml-auto" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <Container>
                    <ModalBody>
                    {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>): null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <Input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    className="mb-2"
                                />
                                <Input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />
                                <Nav style={{fontSize:"0.7rem"}}>
                                    <NavItem>
                                    <NavLink disabled href="#">Remember me</NavLink>
                                    </NavItem>
                                    <NavItem className="ml-auto">
                                    <NavLink  href="#">Forgot password?</NavLink>
                                    </NavItem>
                                </Nav>
                                <Button
                                    color="info"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Sign in</Button>
                                <p className="text-divider" ><span>Or continue with</span></p>   
                                <Button
                                    color="primary"
                                    style={{marginTop: '3rem'}}
                                    block
                                ><FontAwesomeIcon icon={faFacebookF} className="icon"style={{color: "white"}}/><i>Continue with facebook</i></Button>
                                <Button
                                    color="danger"
                                    style={{marginTop: '0.8rem'}}
                                    block
                                ><FontAwesomeIcon icon={faGoogle} className="icon"style={{color: "white"}}/><i>Continue with google</i></Button>
                            </FormGroup>
                            <div style={{textAlign:"center", marginTop:"2.5rem"}} >
                            <small>Don't have an account?&nbsp;<a href="#">Register</a></small>
                            </div>
                        </Form>
                    </ModalBody>
                    </Container>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})


export default connect(mapStateToProps, { login, clearErrors })(LoginModal)