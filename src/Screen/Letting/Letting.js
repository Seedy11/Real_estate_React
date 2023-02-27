import React from 'react'
import { Container } from 'react-bootstrap'
import Button from '../../Components/Button/Button'
import DropdownMenu from '../../Components/DropdownMenu/DropdownMenu'
import LargeContainer from '../../Components/LargeContainer/LargeContainer'
import GridContainer  from '../../StyledItems/GridContainer.elements'
import LettingContainer from './Letting.element'



function Letting() {
  const bedroom = ['1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom']
  return (
    <>
    <LettingContainer>
    
       <h1>Letting</h1>
      <GridContainer>
       
       <DropdownMenu DropdownName="Postcode" option={bedroom}/>
       <DropdownMenu DropdownName="Max beds" option={bedroom} />
       <DropdownMenu DropdownName="Max beds" option={bedroom} />
      
       <DropdownMenu DropdownName="house Type" option={bedroom} />
       <DropdownMenu DropdownName="Min price" option={bedroom} />
        <Button text={'Search'}/>
        </GridContainer>
        
    
    </LettingContainer>
    <LargeContainer />
    </>
  )
}

export default Letting