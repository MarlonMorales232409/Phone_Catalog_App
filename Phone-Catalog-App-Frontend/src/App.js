import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhones } from './helpers/axiosRequest';
import { useSelector } from 'react-redux'
import PhoneListContainer from './components/PhoneListContainer'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// This styles are for the spinner
const override = css` 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-color: red;
`;

function App() {
  
  const dispatch = useDispatch();
  // Geting the state from redux 
  const {phoneList} = useSelector(state => state.phones)
  const {loading} = useSelector(state => state.spiner)
 
  useEffect(() => {
    // Get all data from the backend using axios and send the data to the state 
    dispatch(fetchPhones())
  }, [dispatch]);
  


  return (
 
    <div className='main-container'>
    {/* Load the data into the DOM */}
    {/* PuffLoader is the spiner */}
   {
     loading ? <PuffLoader color={"#1816C3"} loading={loading} css={override} size={150} /> : (phoneList.map((phone,i)=> (<PhoneListContainer 
          key={i} 
          id={phone.id}
          title={phone.title}
          description={phone.description}
          price={phone.price}
          image={phone.image}
          color={phone.color}
        />)) 
        
        )
    
   }


    </div>
 
  );
}

export default App;
