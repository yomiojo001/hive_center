import React, { Component } from 'react';
import Banner from './Banner';
import Hwork from './Hwork';
import LandingPage from './LandingPage'
import Partner from "./Our-Partners";
import Footer from "./Footer";
import VenueList from './VenueList';
import ItemModal from './itemModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Hwork />
                <ItemModal />
                <VenueList />
                <LandingPage />
                <Partner />
                <Footer />
            </div>
        )
    }
}
