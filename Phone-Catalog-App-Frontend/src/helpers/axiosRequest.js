import axios from "axios";
import { setPhoneList } from "../store/slices/phones";
import { setLoading } from "../store/slices/spiner";

// A helper to use axios and set the data inte the state 

export const fetchPhones = () => (dispatch) => {
	const url = "http://localhost:4000/phones";
	
	const getData = async () => {
		const data = await axios(url);

		if (data) {
			dispatch(setPhoneList(data.data.smartphones)); 
			dispatch(setLoading(false));
		}
	};
	getData();
};
