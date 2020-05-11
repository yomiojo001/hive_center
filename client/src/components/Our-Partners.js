import React from "react";
import { Row, Col } from 'reactstrap';
import 'bootstrap';

import '../PatFooter.css';

export default function Partner() {
  return(
    <div className="partner mt-4" style={{textAlign: "center" }}>   
      <Row className="partn">
        <Col className="h3-bg">
          <h3>Our Partners</h3>
        </Col>
      </Row>
      <Row className="partn">
        <Col className="partn-height">
          <img src="https://az742041.vo.msecnd.net/vcsites/vcimages/resource/uploads/CompanyLogo/companylogo200/jideodukoya-logo_636119725390648767_1.png" alt="Jide Odukoya"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8GqT8rN4cNkqUxXtfxSx1O_M8lOZH-qkqhwkPNtEndp18Z12z" alt="Prince Meyson"/>
          <img src="https://djrehab.net/wp-content/uploads/2015/12/TECHNICAL-EVENT-COMPANY-LOGO.png" alt="Sara O. Events"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8GqT8rN4cNkqUxXtfxSx1O_M8lOZH-qkqhwkPNtEndp18Z12z" alt="Prince Meyson"/>
          <img src="https://az742041.vo.msecnd.net/vcsites/vcimages/resource/uploads/CompanyLogo/companylogo200/jideodukoya-logo_636119725390648767_1.png" alt="Jide Odukoya"/>
          <img src="https://gitguardian.com/static/docker-logo-2ddabb277bf0556054c77d2957fbe4b1.svg" alt="Sara O. Events"/>
          <img src="https://az742041.vo.msecnd.net/vcsites/vcimages/resource/uploads/CompanyLogo/companylogo200/jideodukoya-logo_636119725390648767_1.png" alt="Jide Odukoya"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8GqT8rN4cNkqUxXtfxSx1O_M8lOZH-qkqhwkPNtEndp18Z12z" alt="Prince Meyson"/>
          <img src="https://www.purple7.in/wp-content/uploads/2018/05/Email_Purple7_logo_TM.png" alt="Sara O. Events"/>
        </Col>
      </Row>  
    </div>
  );
}
