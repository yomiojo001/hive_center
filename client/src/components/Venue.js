import React, { Component } from "react";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faCar,
  faFan,
  faLightbulb,
  faProjectDiagram,
  faUsers,
  faRestroom,
  faChair,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

class Venue extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     pictures: []
  //   };
  // }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/photos/?id=1")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       let pictures = data.map(pic => {
  //         return (
  //           <div key={pic.results}>
  //             <img src={pic.url} alt="Center" />
  //           </div>
  //         );
  //       });
  //       this.setState({ pictures: pictures });
  //       console.log("state", this.state.pictures);
  //     });
  // }

  render() {
    return (
      <div id="body">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={7} className="imageContainer">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.venuecompass.com/src/uploaded-images/58bfcf7c44838kfa%201.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.venuecompass.com/src/uploaded-images/58bfcf7c44838kfa%201.jpg"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Row className="venueName">
                <Col lg={8} className="pl-3">
                  <h3>Hive Center (Balmoral Deluxe)</h3>
                </Col>
                <Col lg={4} className="book-now">
                  <button>Book Now</button>
                </Col>
              </Row>
            </Col>

            <Col lg={5} className="faqContainer">
              <h3 className="my-4">Frequently asked questions</h3>
              <div className="my-3">
                <p className="question">
                  Q: What type of chair does Hive center provide?
                </p>
                <p className="answer">
                  A: We provide bouquet chairs and also provide Chiavari chairs
                  at an additional cost.
                </p>
              </div>
              <hr />
              <div className="my-3">
                <p className="question">
                  Q: What type of chair does Hive center provide?
                </p>
                <p className="answer">
                  A: We provide bouquet chairs and also provide Chiavari chairs
                  at an additional cost.
                </p>
              </div>
              <hr />
              <div className="my-3">
                <p className="question">
                  Q: What type of chair does Hive center provide?
                </p>
                <p className="answer">
                  A: We provide bouquet chairs and also provide Chiavari chairs
                  at an additional cost.
                </p>
              </div>
              <hr />
            </Col>
          </Row>
        </Container>

        <Container-fluid>
          <Row className="address my-3">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Lekki, Lagos
            </p>
          </Row>
        </Container-fluid>

        <Container>
          <Row className="callButton">
            <button>
              Call <FontAwesomeIcon icon={faPhoneAlt} className="icon-call" />
            </button>
          </Row>
        </Container>

        <Container-fluid id="facility">
          <Row className="heading mt-4">
            <h3>Facilities</h3>
          </Row>
          <Row className="facilities">
            <Col>
              <p>
                <FontAwesomeIcon icon={faCar} className="icons" />
                Car park (500 cars)
              </p>
              <p>
                <FontAwesomeIcon icon={faFan} className="icons" />
                Air condition
              </p>
              <p>
                <FontAwesomeIcon icon={faLightbulb} className="icons" />
                Power supply
              </p>
              <p>
                <FontAwesomeIcon icon={faProjectDiagram} className="icons" />
                Multiple screen projector
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon={faUsers} className="icons" />
                Capacity (1500 people)
              </p>
              <p>
                <FontAwesomeIcon icon={faChair} className="icons" />
                Tables/Chairs
              </p>
              <p>
                <FontAwesomeIcon icon={faUserSecret} className="icons" />
                Security
              </p>
              <p>
                <FontAwesomeIcon icon={faRestroom} className="icons" />
                Rest room (Male/Female)
              </p>
            </Col>
          </Row>
        </Container-fluid>
        <Container-fluid id="description">
          <Row className="heading mt-4">
            <h3>Description</h3>
          </Row>
          <Row className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio, quas beatae ullam praesentium pariatur molestiae corrupti
              adipisci ducimus quae recusandae.
            </p>
          </Row>
        </Container-fluid>
        <Container-fluid id="reviews">
          <Row className="heading mt-4">
            <h3>Client Reviews</h3>
            <p>Write a review</p>
          </Row>
          <Row className="reviews">
            <p>No reviews yet</p>
          </Row>
        </Container-fluid>

        <Container id="others" className="mb-5">
          <Row className="others-heading my-4">
            <h3>Other Hive Centers in Lagos</h3>
          </Row>
          <Row>
            <Col>
              <div className="box">
                {/* {this.state.pictures} */}
                <img
                  className="d-block w-100"
                  src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                  alt="Ikeja"
                />
                <p>Ikeja, Lagos</p>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  className="d-block w-100"
                  src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                  alt="Gbagada"
                />
                <p>Gbagada, Lagos</p>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  className="d-block w-100"
                  src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                  alt="Ikorodu"
                />
                <p>Ikorodu, Lagos</p>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  className="d-block w-100"
                  src="https://files.ogavenue.com/venues/Lagos/Ojodu/Ojodu-Berger/Canaanland-Events-Centre/1.jpg"
                  alt="Ajah"
                />
                <p>Ajah, Lagos</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Venue;
