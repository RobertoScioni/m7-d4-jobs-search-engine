import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import configurestore from "./store"
import { Provider } from "react-redux"
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
} from "react-router-dom"
import Favs from "./Components/Favourites"

ReactDOM.render(
	<Provider store={configurestore()}>
		<React.StrictMode>
			<Router>
				<Route exact path="/" component={App} />
				<Route exact path="/favs" component={Favs} />
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
