import React from "react"
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Jobs from './Jobs'
import Job from './Job'
import store, { fetchJobs } from "../store";
import CreateJob from "./CreateJob";
import HomePage from './HomePage'


//import any sub-components

class _App extends React.Component {
	constructor() {
		super()
	}
	//constructor to initialize state
	//any lifecycle methods
	componentDidMount() {
		this.props.load()
	}
	//any custom methods
	//render
	render() {
		return (
			<>
				{/* {console.log(store.getState())} */}
				<Router>
					{}<HomePage/>
					<Route path='/jobs' exact component={Jobs} />
					<Route path='/createJob' exact component={CreateJob} />
					<Route path='/jobs/:id' exact component={Job} />
					<Route path='/' />
				</Router>
			</>
		)
	}

}
const App = connect((state) => {
	return {
		jobs: state.jobs
	};
}, (dispatch) => {
	return {
		load: () => dispatch(fetchJobs())
	};
})(_App);
export default App