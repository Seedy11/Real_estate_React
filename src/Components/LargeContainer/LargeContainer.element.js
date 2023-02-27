import styled from "styled-components";

const CardContainer = styled.h2 `
background-color: white;
border: 1px solid #dee2e6;
 box-shadow: 2px 2px #aeaeae;
border-radius: 20px;
padding: 5px 10px;
margin: 2rem 0rem;
font-size: 20px;
font-weight: 100;
font-style: italic;
h3 {
    font-size: 1.5rem;
    font-weight: 100;
font-style: italic;
}
img {
    width: 40rem;
    border-radius: 1rem
 }

@media only screen and (max-width: 600px) {
  
    
    img {
        height: 300px;
         width: 320px;
        border-radius: 20px;
        align-item: center;
        
        
     }
    }

`
export default CardContainer