import React, { useState } from 'react'
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



export default function StateDrop () {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="mr-2">
                        <DropdownToggle caret style={{backgroundColor:"white"}} className="text-dark px-4">
                            State
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Abuja</DropdownItem>
                            <DropdownItem>Ibadan</DropdownItem>
                            <DropdownItem>Kano</DropdownItem>
                            <DropdownItem>Lagos</DropdownItem>
                            <DropdownItem>Owerri</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
        </div>
    )
}

