import React from 'react'
import { Navigate, useParams, Link } from "react-router-dom";
import { useSelector} from 'react-redux'
import getPhone from '../helpers/getPhone'
import styled from "styled-components";
import 'animate.css';


const PhoneDetailComponent = () => {
  const {id} = useParams();
  const {phoneList} = useSelector(state => state.phones)

  
  if (!phoneList) {
    return <Navigate to="/" />;
  }
  const phone = getPhone(id, phoneList)

  if(!phone){
    return <Navigate to="/" />;
  }

  
    return (
      <Wrapper className="animate__animated animate__fadeInLeft">
        <ImageContainer>
          <img src={phone.image} alt={phone.title} />
        </ImageContainer>
        <Details className="animate__animated animate__fadeInRight">
          <h2>{phone.title}</h2>
          <hr />
          <p className='description'>{phone.description}</p>
          <hr/>
          <p><b>Color:</b> {phone.color}</p>
          <p className="price"><b>Price</b> ${phone.price}</p>
          <Link to="/" className="link">Back</Link>
        </Details>
      </Wrapper>
  )
}

export default PhoneDetailComponent

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  max-width: 350px;
  width: 70%;
  min-width: 220;
  max-height: 330px;
  min-height: 220px;
  padding: 20px;

  img{
    margin: auto;
    width: 60%;
    min-width: 220px;
    min-height: 300px;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`

const Details = styled.div`
  max-width: 350px;
  padding: 20px;

  h2{
    padding: 7px 0;
  }

  p{
    padding: 5px 0;
  }

  .description {
    color: #555
  }

  .price{
    color: green;
    margin-bottom: 20px;
  }

  .link{
    color: #fff;
    text-decoration: none;
    padding: 12px 30px;
    font-weight: bold;
    background-color: #48e;
    border-radius: 7px;

    :hover{
      background-color: #4169E1;
    }
  }

  
`