import { h, Component } from 'preact';
import style from './style';
import {Button} from '../../components/UI'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Button id="see-activities" className="activity-button" href="/activities">See Activities</Button>
			</div>
		);
	}
}
