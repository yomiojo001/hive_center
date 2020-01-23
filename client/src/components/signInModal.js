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
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import '../App.css'


class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e =>{
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }


        // Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
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
                    <ModalBody>
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
                                >Continue with facebook</Button>
                                <Button
                                    color="danger"
                                    style={{marginTop: '0.8rem'}}
                                    block
                                >Continue with google</Button>
                            </FormGroup>
                            <div style={{textAlign:"center", marginTop:"2.5rem"}} >
                            <small>Don't have an account?&nbsp;<a href="#">Register</a></small>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(ItemModal)