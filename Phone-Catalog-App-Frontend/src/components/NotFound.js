import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// This componenet is used for 404 Not Found page, if the user enter a wrong url

const NotFound = () => {
  return (
    <Wrapper>
        <h1>404</h1>
        <h3>Page Not Found!</h3>
        <button className='goHomeCont'>
            <Link to="/" className='goHome'>Go to Home</Link>
        </button>
    </Wrapper>
  )
}

export default NotFound

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #ad0000;
        font-weight: 700;
        font-size: 20rem;

    }

    h3 {
        font-size: 2rem;
        padding: 25px;
        margin-bottom: 10px;
    }

    .goHomeCont{

        background-color: transparent;
        border: none;
    }

    .goHome{
        text-decoration: none;
        color: blue;
        font-size: 1.2rem;
        padding: 20px;
        margin-top:30px;
        text-transform: uppercase;

        :hover{
            color: #ad0000;
        }
    }

`