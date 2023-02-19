import React from 'react'
import { Dropdown } from 'react-bootstrap'

function DropdownMenu({DropdownName,option,}) {
  const placeholderOption = []
  const DropdownValue = option ?? placeholderOption;
  
  return (

    <Dropdown style={{margin: '1rem',}}>
      <Dropdown.Toggle id="dropdown-basic" >
        {DropdownName}
      </Dropdown.Toggle>

      <Dropdown.Menu >
      
        {DropdownValue.map((placeholderOption, index) => (
          <Dropdown.Item href="#/action-1" key={index} value={placeholderOption} >
            {placeholderOption}
            </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    
  )
}

export default DropdownMenu