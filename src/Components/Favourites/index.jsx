import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
//import { Button, Form, FormControl } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
	removeJobFromFavs: (id) =>
		dispatch({
			type: "REMOVE_JOB_FROM_FAVS",
			payload: id,
		}),
})

class Favs extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidUpdate = (oldprops) => {
		//console.log("yeah we got an update")
	}
	render() {
		return (
			<>
				<Link to="/">go to /</Link>
				<div className="container mx-auto">
					{this.props.favs.jobs !== [] &&
						this.props.favs.jobs.map((job, index) => (
							<div>
								<span onClick={() => this.props.removeJobFromFavs(job)}>♥</span>
								<b>Company: </b>
								{job.company}
								<b> Location: </b>
								{job.location}
							</div>
						))}
				</div>
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs)
