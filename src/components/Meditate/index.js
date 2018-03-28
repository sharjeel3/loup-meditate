import preact from 'preact'
import styles from './style.scss'
import {PageBlock, Card, Section, Text} from '../../components/UI'
import {getBackgroundImgStyle} from '../../global'

const getTitle = (title) => {
    const newTitle = title.slice()
    return newTitle.split(" ").shift()
}

const Meditate = ({content}) => {
    console.log('content2', content)
    return <div>
        <Card className={styles.root1} style={{color: 'white', ...getBackgroundImgStyle(content.landscapeMobileImage.url)}}>
            <Section>
                <Text>MEDITATION</Text>
                <div>
                    <Text>{getTitle(content.title)}</Text>
                    <div>
                        <div>heart</div>
                        <div>
                            <Text>
                                <span>98</span>
                                <span>Karma points earned</span>
                            </Text>
                        </div>
                    </div>
                </div>
                <div>
                    <Text>Meditation Track</Text>
                    <Text>read before you start></Text>
                </div>
                <div>
                    <Card></Card>
                    <div>{content.snippet}</div>
                </div>
            </Section>
        </Card>
    </div>
}

export default Meditate
