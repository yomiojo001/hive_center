import React, { useState } from 'react'
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



export default function LocationDrop() {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="mr-2">
                            <DropdownToggle caret style={{backgroundColor:"white"}} className="text-dark px-4">
                                Location
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Ajah</DropdownItem>
                                <DropdownItem>Gbadaga</DropdownItem>
                                <DropdownItem>Ikeja</DropdownItem>
                                <DropdownItem>Ikorodu</DropdownItem>
                                <DropdownItem>Lekki</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
        </div>
    )
}
