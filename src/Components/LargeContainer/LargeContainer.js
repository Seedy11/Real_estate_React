import React from 'react'
import { Col, Container} from 'react-bootstrap'
import CardContainer from './LargeContainer.element'
import Image from '../../Images/pexels-alex-staudinger-1732414.jpg'
import Button from '../Button/Button'
import GridContainer from '../../StyledItems/GridContainer.elements'


const LargeContainer = () => {
  return (
    
        <CardContainer>
        <GridContainer>
        <Col>
        <img src={Image} className="card-img-top" alt="..." />
        </Col>
        <Col style={{alignItems: 'center',}}>

              <h1> Leeds canterbury Lane</h1>
              <h3>Available 30/04/2023</h3>
             <h3>Price £150000</h3>
             <h3>bedroom 3</h3>
             <h3>bathroom 2</h3>
        <h3>Reception</h3>
        <Button text={'View Detail'}></Button>
              
              </Col>
   
      </GridContainer>
        </CardContainer>
   
  )
}

export default LargeContainer