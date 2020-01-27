import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


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
                color="info" className="mr-3 mt-1 btn-sm"
                onClick={this.toggle}
                >Register</Button>

<Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <button type="button" style={{border:"0", backgroundColor:"#fff",fontSize:"1.8rem",color:"ccc" }} class="close" onClick={this.toggle} className="ml-auto" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <Container>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                
                                <Button
                                    color="primary"
                                    style={{marginTop: '0.5rem'}}
                                    block
                                >Continue with facebook</Button>
                                <Button
                                    color="danger"
                                    style={{marginTop: '0.8rem'}}
                                    block
                                >Continue with google</Button>
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
                                    name="fullname"
                                    id="fullname"
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
                            <small>Have an account?&nbsp;<a href="#">Sign in</a></small>
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
    item: state.item
})


export default connect(mapStateToProps, { addItem })(ItemModal)