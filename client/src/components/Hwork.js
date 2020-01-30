import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, Container
  } from 'reactstrap';
import '../Banner.css'


export default class Hwork extends Component {
    render() {
        return (
            <div style={{height:"20rem", marginTop:"2rem", textAlign: "center"}}>
                <div className="bg-h3">
                    <h3>How It Works</h3>
                </div>
                <Container>
                <CardDeck>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)", border:"0", boxShadow: "rgba(162, 157, 157, 0.18) 1px 2px 3px 6px"}}>
                        
                        <CardImg src={require("../img/search.svg")} alt="search svg" width="50%" height="30%" className="mt-3"  />
                        
                        <CardBody style={{marginBottom: "-15rem"}}>
                        <CardTitle>Search</CardTitle>
                        <CardText>With a single click, choose your preferred location</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)", border:"0", boxShadow: "rgba(162, 157, 157, 0.18) 1px 2px 3px 6px"}}>
                        
                        <CardImg src={require("../img/book.svg")} alt="book svg" width="50%" height="30%" className="mt-3"  />
                        
                        <CardBody style={{marginBottom: "-15rem"}}>
                        <CardTitle >Book</CardTitle>
                        <CardText>Select a booking day of your choice</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{textAlign:"center", backgroundColor:"rgb(181, 236, 236)", border:"0", boxShadow: "rgba(162, 157, 157, 0.18) 1px 2px 3px 6px"}}>
                        
                        <CardImg src={require("../img/pay.svg")} alt="pay svg" width="50%" height="30%" className="mt-3"/>
                        
                        <CardBody style={{marginBottom: "-15rem"}}>
                        <CardTitle >Pay</CardTitle>
                        <CardText>Make your payment to confirm your booking</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                </Container>
            </div>
        )
    }
}
