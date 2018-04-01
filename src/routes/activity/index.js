import { Component } from 'preact';
import styles from './style';
import {PageBlock} from '../../components/UI'
import {ACTIVITY_CONTENT_TYPES} from "../../global"

import Workout from '../../components/Workout'
import Meditate from '../../components/Meditate'
import Breakfast from '../../components/Breakfast'
import Article from '../../components/Article'

export default class Activity extends Component {

    getActivitiesJson(response) {
        let activities = []
        if(response && response.dailyActivities) {
            let dailyActivity = response.dailyActivities.reduce(x=>x)
            activities = (dailyActivity && dailyActivity.activities) ? dailyActivity.activities : []
        }
        return activities
    }

    getActivityComponents(activities) {
        if(!activities){
            return []
        }
        return activities.map((activity, ii) => {
            let contentType = activity.contentType
            switch(contentType) {
                case 1:
                    return <Breakfast content={activity}></Breakfast>
                case 5:
                    return <Workout content={activity}></Workout>
                case 104:
                    return <Meditate content={activity}></Meditate>
                default:
                    return <Article content={activity}></Article>
            }
        })
    }

    render() {
        const {json} = this.props
        const result = json && json.result ? json.result : null
        const activities = this.getActivitiesJson(result);
        return (
            <PageBlock>
                <div className={styles.root}>
                    <div className={styles.activityContainer}>
                        {this.getActivityComponents(activities)}
                    </div>
                </div>
            </PageBlock>
        );
    }
}
