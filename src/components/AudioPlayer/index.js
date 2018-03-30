import preact from 'preact'
import styles from './style.scss'
import {Card, Section, Text, ProgressBar, PlayNextIcon, PlayPauseIcon} from '../../components/UI'

const AudioPlayer = ({children, ...props}) => {
    const {title} = props
    return <Card className={styles.root}>
        <Section>
            <div className={styles.titleContainer}>
                <Text>{title}</Text>
                <Text>2:34</Text>
            </div>
            <div className={styles.controlsContainer}>
                <div className={styles.playNextContainer}>
                    <PlayPauseIcon className={styles.playButton}/>
                    <PlayNextIcon className={styles.nextButton}/>
                </div>
                <div>
                    <ProgressBar/>
                </div>
            </div>
        </Section>
    </Card>
}

export default AudioPlayer
