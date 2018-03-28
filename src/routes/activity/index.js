import { Component } from 'preact';
import style from './style';
import {PageBlock, Card, Section} from '../../components/UI'

export default class Activity extends Component {
    render() {
        return (
            <PageBlock>
                <div class={style.root}>
                    <Card>
                        <Section>
                            something comes here
                        </Section>
                    </Card>
                </div>
            </PageBlock>
        );
    }
}
