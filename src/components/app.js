import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { connect } from 'preact-redux'
import fetchActivities from '../actions'

//import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Activity from '../routes/activity';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

import {UIProvider} from './UI'

if (module.hot) {
	require('preact/debug');
}

class App extends Component {

    constructor(props) {
        super(props)
		this.helmet = {
        	link: [
            	{
            		rel: "stylesheet",
					href: "https://use.typekit.net/laf1hgt.css"
            	},
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Montserrat:600,700"
                }
    		]
		}
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
		const { json } = this.props
		return (
			<div id="app">
				<UIProvider helmet={this.helmet}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
                        <Activity path="/activities" json={json} />
					</Router>
                </UIProvider>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    json: state.plan.json
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(fetchActivities())
    }
})

let reduxApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default reduxApp
