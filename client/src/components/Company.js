import React, { Component } from 'react';
import VenueList from './VenueList';
import ItemModal from './itemModal';

export default class Company extends Component {
    render() {
        return (
                <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h1>Company Page</h1>
                
                <ItemModal />
                <VenueList />
            </div>
        )
    }
}
