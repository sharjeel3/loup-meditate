import preact from 'preact'
import styles from './style.scss'
import {PageBlock, Card, Section, Text, TextLink, HeartIcon} from '../../components/UI'
import {getBackgroundImgStyle} from '../../global'
import AudioPlayer from '../AudioPlayer'

const getTitle = (title) => {
    const newTitle = title.slice()
    return newTitle.split(" ").shift()
}

const Meditate = ({content}) => {
    console.log('content2', content)
    return <div>
        <Card className={styles.root} style={{height: 450, ...getBackgroundImgStyle(content.portraitMobileImage.url)}}>
            <Section>
                <Text className={styles.activityTitle}>MEDITATION</Text>
                <div className={styles.activityTitleContainer}>
                    <Text className={styles.contentTitle}>{getTitle(content.title)}</Text>
                    <div className={styles.karmaContainer}>
                        <div>
                            <HeartIcon className={styles.heart}/>
                        </div>
                        <div>
                            <Text>
                                <span className={styles.karmaNumber}>98</span>
                                <span className={styles.karmaDesc}>Karma points earned</span>
                            </Text>
                        </div>
                    </div>
                </div>
                <div>
                    <Text class={styles.trackType}>Meditation Track</Text>
                    <TextLink className={styles.moreLink} href={'/SOME_PATH/' + content.contentUrlPartial}>read before you start></TextLink>
                </div>
                <div style={{marginTop: 'auto'}}>
                    <AudioPlayer title={content.contentTitle}></AudioPlayer>
                    <div className={styles.playerFooter}>{content.snippet}</div>
                </div>
            </Section>
        </Card>
    </div>
}

export default Meditate
