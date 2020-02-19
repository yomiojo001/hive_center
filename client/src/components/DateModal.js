import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form
} from 'reactstrap';




export default class DateModal extends Component {
    state={
        modal: false

    }

    toggle =()=> {
        this.setState({
            modal: !this.state.modal
        })
    }

    
    render() {
        return (
            <div>
                <Button
                    className="btn-md px-5 text-dark mr-2"
                    onClick={this.toggle}
                    style={{backgroundColor:"white"}}
                >Date</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <button type="button" style={{border:"0", backgroundColor:"#fff",fontSize:"1.8rem",color:"ccc" }} onClick={this.toggle} className="ml-auto" aria-label="Close"><span aria-hidden="true">×</span></button>

                <ModalBody>
                    <Form>
                        calendar
                    </Form>
                </ModalBody>

                </Modal>
                
            </div>
        )
    }
}
