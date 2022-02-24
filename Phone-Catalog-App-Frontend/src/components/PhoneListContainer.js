import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'animate.css';

const PhoneListContainer = ({
	id,
	title,
	price,
	image,
	color,
}) => {


	return (
		<Wrapper className="animate__animated animate__fadeInDown">
			<ImgContainer>
				<img src={image} alt={title} className='h-40' />
			</ImgContainer>
			<DetailsContainer>
				<p>{title}</p>
				<p>{color}</p>
				<p className='price'>$ {price}</p>
			</DetailsContainer>
			<ButtonDetails>
        <Link to={`/details/${id}`} className="details">Show Details</Link>
      </ButtonDetails>
		</Wrapper>
	);
};

export default PhoneListContainer;


// Styles

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
  max-width: 375px;
  width: 30%;
  height: 390px;
	margin: 20px;
	border: solid 1px #e2e2e2;
	color: #161934;
	border-radius: 7px;
	padding: 20px;

  @media only screen and (max-width: 600px) {
    text-align: center;
    width: 80%;
  }

`;

const ImgContainer = styled.div`
	width: 120px;
	margin: 5px 0;

	img {
		width: 100%;
		height: 100%;
    object-fit: cover;
	}
`;

const DetailsContainer = styled.div`
	width: 70%;
	margin: 5px 0;

	p {
		padding: 3px;
	}
	.price {
		color: green;
	}
`;

const ButtonDetails = styled.div`
	margin-top: 7px;
	border: none;
	border-bottom: solid 1px #ccc;

  
  .details {
    padding: 10px 0;
    text-decoration: none;
    color: #333;
      :hover {
        color: #81080d;
    
        cursor: pointer;
      }
  }
`;
