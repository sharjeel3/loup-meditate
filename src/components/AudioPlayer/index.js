import preact from 'preact'
import styles from './style.scss'
import {PageBlock, Card, Section, Text} from '../../components/UI'

const AudioPlayer = ({children, ...props}) => {
    const {title} = props
    return <Card className={styles.root}>
        <Section>
            <div className={styles.titleContainer}>
                <Text>{title}</Text>
                <Text>2:34</Text>
            </div>
            {children}
        </Section>
    </Card>
}

export default AudioPlayer
