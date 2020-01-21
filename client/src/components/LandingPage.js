import React, { Component } from 'react';
import faker from 'faker';
import Testimonial from './Testimonial';
import Facility from './Facility';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export default class LandingPage extends Component {

   
    render() {
        return (
            <div>
               <h5 className="tc bg-light b">Our Facilities</h5>
                          
                <Carousel
                showDots={true} 
                responsive={responsive}>
                           <Facility Location = "Ikeja, Lagos" Image ={faker.image.city()}/>                
                           <Facility Location = "Owerri" Image ={faker.image.city()}/>                                             
                           <Facility Location = "Wuse II, Abuja"  Image ={faker.image.city()}/>                                              
                            <Facility Location = "Mokola, Ibadan"  Image ={faker.image.city()}/>     
                            <Facility Location = "Lokoja" Image ={faker.image.city()}/>                                             
                           <Facility Location = "Kano"  Image ={faker.image.city()}/>                                              
                            <Facility Location = "Ijebu, Osun"  Image ={faker.image.city()}/>                     
                 
                
                </Carousel>;           
                
                    <div className=" pa2 bg-light-gray">
                            <Testimonial 
                            quote="Beautiful Images to use for all social and corporate functions.
                            Massive car park space which is different from the usual."
                            author="Kolade Cole " job="Event Planner | Sarah 'O' events"
                            avatar={faker.image.avatar()}
                           />
                    </div>

            </div>
        )
    }
}
