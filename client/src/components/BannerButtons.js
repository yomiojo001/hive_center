import React from 'react'
import { ButtonGroup, Button, Form } from 'reactstrap';
import DateModal from './DateModal';
import StateDropdown from './buttons/StateDrop';
import LocationDropdown from './buttons/LocationDrop';
import '../Banner.css';


export default function BannerButtons () {

        return (
            <div style={{border:"3px solid #fff", width:"40rem", textAlign:"center",}} className="p-5 m-auto">
                <div>
                    <h3 style={{color:"white",marginTop:"-1rem",marginBottom:"2rem"}}>Find and book our venues with ease</h3>
                </div>
                <Form>
                    <ButtonGroup>
                        <StateDropdown />
                        <LocationDropdown />
                        <DateModal />
                        <Button color="primary px-3">Search</Button>
                    </ButtonGroup>
                </Form>
            </div> 
        )
    
}
