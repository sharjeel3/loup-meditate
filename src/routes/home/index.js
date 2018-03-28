import { h, Component } from 'preact';
import style from './style';
import {Button} from '../../components/UI'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Button id="see-activities" href="#">See Activities</Button>
			</div>
		);
	}
}
