
// This function find the phone to show it into the PhoneDetailComponent geting the id from the url 

const getPhone = (id,phones)=>{ 
    const data = phones.find((phone)=> phone.id ===  Number(id))
    
    if(data){ 
        return data
        
    }
    return false;
}

export default getPhone