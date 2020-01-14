import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './LandingPage.css';
import Owerri from './images/2423.jpg';
import Lagos from './images/ballroom-decoration6.jpg';
import Wuse from './images/Z7T7769小.jpg';
import Ibadan from './images/ballroom-decoration6.jpg';
import Picture from './images/meeting-hall.jpg';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
               <h5 className="tc bg-light b">Our Facilities</h5>
                <div className="flex justify-center carousel-of-images ">
                    <div className="card ma3">
                        <img src={Owerri} alt="Avatar"/>
                        <div className="container">
                            <h6 className="tc ma2">Owerri Ibadan</h6>                             
                        </div>
                    </div> 
                    <div className="card ma3">
                        <img src={Lagos} alt="Avatar"/>
                        <div className="container">
                            <h6 className="tc ma2">Ikeja, Lagos</h6>                             
                        </div>
                    </div> 
                    <div className="card ma3">
                        <img src={Wuse} alt="Avatar"/>
                        <div className="container">
                            <h6 className="tc ma2">Wuse II, Abuja</h6>                             
                        </div>
                    </div> 
                    <div className="card ma3">
                        <img src={Ibadan} alt="Avatar"/>
                        <div className="container">
                            <h6 className="tc ma2">Mokola, Ibadan</h6>                             
                        </div>
                    </div>                  
                          
                </div>
                            <div className="ma4 bg-light pa2">
                    <div className="carousel-of-quotes items-center">
                        <div className="flex justify-center ">
                            <div className="pa4">
                        <p className="gray f4"> Beautiful Images to use for all social and corporate functions.
                        <br/> Massive car park space which is different from the usual.
                        </p>
                        <p className="content-center  f6 pt3">Kolade Cole <br/> Event Planner | Sarah 'O' events</p>
                        </div>
                        <img className="fr  round-image" src={Picture} alt="picture"/>
                        </div>
                        
                       
                    </div>
                    </div>

            </div>
        )
    }
}
