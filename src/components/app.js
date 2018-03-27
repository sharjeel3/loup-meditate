import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { connect } from 'preact-redux'
import refreshPlans from '../actions'

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

class App extends Component {

    constructor(props) {
        super(props)
    }

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    loading: state.plan.loading
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(refreshPlans({}))
    }
})

let reduxApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default reduxApp
