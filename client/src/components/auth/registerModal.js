import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Container,
    Alert
} from 'reactstrap';
import signInModal from './signInModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';


class RegisterModal extends Component{
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            }else{
                this.setState({ msg: null})
            }
        }

        // If authenticated close modal
        if(this.state.modal){
            if(isAuthenticated){
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

        const  { name, email, password } = this.state;

        // Create new user
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        this.props.register(newUser);


    }



    render(){
        return(
            <div>
                <Button
                color="info" className="mr-3 mt-1 btn-sm"
                onClick={this.toggle}
                >Register</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <button type="button" style={{border:"0", backgroundColor:"#fff",fontSize:"1.8rem",color:"ccc" }} onClick={this.toggle} className="ml-auto" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <Container>
                    <ModalBody>
                        { this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                
                                <Button
                                    color="primary"
                                    style={{marginTop: '0.5rem'}}
                                    block
                                ><FontAwesomeIcon icon={faFacebookF} className="icon"style={{color: "white"}}/><i>Continue with facebook</i></Button>
                                <Button
                                    color="danger"
                                    style={{marginTop: '0.8rem'}}
                                    block
                                ><FontAwesomeIcon icon={faGoogle} className="icon"style={{color: "white"}}/><i>Continue with google</i></Button>
                                <p className="text-divider" ><span>Or continue with</span></p> 
                                <Input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    className="mb-2"
                                />
                                <Input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Fullname"
                                    className="mb-2"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-2"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    placeholder="Confirm Password"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="info"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Sign Up</Button>
                                
                            </FormGroup>
                            <div style={{textAlign:"center", marginTop:"2.5rem"}} >
                            <small>Have an account?&nbsp;<a href="/" onClick={() => (signInModal)}>Sign in</a></small>
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
});


export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);