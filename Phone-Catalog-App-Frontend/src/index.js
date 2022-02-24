import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneDetailComponent from "./components/PhoneDetailComponent";
import NotFound from "./components/NotFound";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter> {/* Creating a new Raute */}
				<Routes>
					<Route path='/' element={<App />} /> {/* Home route*/}
					<Route
						path='/details/:id'
						element={<PhoneDetailComponent />} /* Phone Details Page Route */
					/>
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
