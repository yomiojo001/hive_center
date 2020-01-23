import React from "react";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../PatFooter.css';



export default function Footer() {
  return(
    <div className="footer">
      <Container>
        <Row>
            <Col>
              <div className= "first">
              <h3><span>HIVE</span><small>center</small></h3>                
                <div style={{display: "flex", marginLeft: "-10px"}}>
                  <a href= "instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon"/>  </a>
                  <a href= "facebook.com"><FontAwesomeIcon icon={faFacebookF} className="icon"/>   </a>                             
                  <a href= "twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon"/>  </a>    
                </div>
              </div>
            </Col>
            <Col>
            <Row className= "row2">              
                <Col>
                  <div className="sub">
                      <h3>LEGAL</h3>
                      <a href="hivecentre.com"><p>Terms of Use</p></a>
                      <a href="hivecentre.com"><p>Privacy Account</p></a>
                      <a href="hivecentre.com"><p>Privacy Policy</p></a>
                      <a href="hivecentre.com"><p>Cookies Policy</p></a>
                      <a href="hivecentre.com"><p>Copyright Notification</p></a>
                  </div>
                </Col>
                <Col>
                  <div className="sub">
                    <h3>COMPANY</h3>
                    <a href="hivecentre.com"><p>About Us</p></a>
                    <a href="hivecentre.com"><p>Contact Us</p></a>
                    <a href="hivecentre.com"><p>Terms & Condition</p></a>
                    <a href="hivecentre.com"><p>Partner With Us</p></a>
                  </div>
                </Col>
                <Col>
                  <div className="sub">
                    <h3>SUPPORT</h3>
                    <a href="hivecentre.com"><p>Contact</p></a>
                    <a href="hivecentre.com"><p>Support</p></a>
                    <a href="hivecentre.com"><p>FAQ</p></a>
                    <a href="hivecentre.com"><p>Help</p></a>
                  </div>
                </Col>
             </Row>
            </Col>
          </Row>
          <hr style={{backgroundColor: "#222"}}/>
          <Row className= "row3">
            <p>2019 Hive Center. All rights reserved.</p>
          </Row>
      </Container> 
    </div>
  );
}