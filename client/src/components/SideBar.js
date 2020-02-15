import React from 'react';
import './SideBar.css';


import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


export default props => {
    return (
      
      <Menu
         isOpen={ true }
      customBurgerIcon={ false }
      customCrossIcon={ false }
      disableOverlayClick 
         noOverlay
      >
          <main id="page-wrap">
          <div> <img src={props.image} key={props.name} width="40px" className="fl"/>          
          <small> {props.name} {props.email} </small>
               </div>
        </main>
        <a className="menu-item pa2-l" href="/">
        <FontAwesomeIcon icon={faHome}  className="mr4-l"/>
         Home 
        </a>
  
        <a className="menu-item pa2-l" href="/Bookings">
        <FontAwesomeIcon icon={faCalendarAlt}  className="mr4-l"/>
          Bookings
        </a>
  
        <a className="menu-item pa2-l" href="/Report">
        <FontAwesomeIcon icon={faChartLine} className="mr4-l" />
          Report
        </a>
  
        <a className="menu-item pa2-l" href="/Centres">
        <FontAwesomeIcon icon={faChartLine} className="mr4-l" />
          Centres
        </a>

        <a className="menu-item pa2-l" href="/Add New Centre">
        <FontAwesomeIcon icon={faChartLine} className="mr4-l" />
          Add New Centre
        </a>

        <a className="menu-item pa2-l" href="/Logout">
        <FontAwesomeIcon icon={faSignOutAlt}  className="mr4-l"/>
          Logout
        </a>
      </Menu>
      
    );
  };

