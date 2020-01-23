import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, Container
  } from 'reactstrap';
import '../Banner.css'

export default class Hwork extends Component {
    render() {
        return (
            <div style={{height:"15rem", marginTop:"2rem", textAlign: "center"}}>
                <div className="bg-h3">
                    <h3>How It Works</h3>
                </div>
                <Container>
                <CardDeck>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)"}}>
                        <CardImg top src="/assets/256x186.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Search</CardTitle>
                        <CardText>with a single click, choose your preferred location</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)"}}>
                        <CardImg top src="/assets/256x186.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Book</CardTitle>
                        <CardText>select a booking day of your choice</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)"}}>
                        <CardImg top src="/assets/256x186.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Pay</CardTitle>
                        <CardText>make your payment to confirm your booking</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                </Container>
            </div>
        )
    }
}
