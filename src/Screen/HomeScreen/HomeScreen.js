import React from 'react'
import {  Container } from 'react-bootstrap'
import crib from '../../Images/pexels-alex-staudinger-1732414.jpg'
import crib2 from '../../Images/pexels-asad-photo-maldives-1268871.jpg'
import crib3 from '../../Images/pexels-expect-best-323780.jpg'
import crib4 from '../../Images/pexels-mark-mccammon-2724749.jpg'
import ImageWrapper from './HomeScreen.element'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Button from '../../Components/Button/Button'
import GridContainer from '../../StyledItems/GridContainer.elements'

const HomeScreen = ({text}) => {
  return (
    <>

    <ImageWrapper>
        <AliceCarousel autoPlay autoPlayInterval="2000">
      <img src={crib} classNamename="sliderimg" />
      <img src={crib2} classNamename="sliderimg" />
      <img src={crib3} classNamename="sliderimg" />
      <img src={crib4} classNamename="sliderimg" />
      </AliceCarousel>
    </ImageWrapper>

   
       <h2>Explore the property</h2>
       
       <Button text={'Renting'}></Button>
       <Button text={'Letting'}></Button>
      
    

  <GridContainer style={{marginTop: '5rem'}}>
<div className="card grid-item" >
  <img  src={crib} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card grid-item">
  <img src={crib2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card grid-item" >
  <img src={crib3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card grid-item" >
  <img src={crib4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </GridContainer>

      
    </>
  )
}

export default HomeScreen