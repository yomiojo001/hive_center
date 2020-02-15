import React, { Component } from 'react';
import faker from 'faker';

import SideBar from './SideBar';
import Overview from './Overview';



export default class Admin extends Component {


  render() {
    return (
      <div id="container-fluid">
        <SideBar  image={faker.image.avatar()} name={faker.name.findName()} email={faker.internet.email()}/>
        <div className="fr mr7 mt4">
        <Overview/>
      </div>
      </div>
    );
  }
}
