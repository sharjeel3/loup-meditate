import preact, {Component} from 'preact'
import styles from './style.scss'
import {Card, Section, Text, ProgressBar, PlayNextIcon, PlayPauseIcon, ClockIcon} from '../../components/UI'
import BG from './BG'
import {getTimeInMinutes} from '../../global'

class AudioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalDuration: 0,
            currentTime: 0,
            isPlaying: false
        }
    }

    storeAudioReference = audio => {
        if(audio !== null) {
            this.audio = audio
        }
    }

    componentDidMount() {
        this.events()
    }

    events() {
        this.audio.addEventListener('loadedmetadata', () => {
            this.setState({
                totalDuration: this.audio.duration
            })
        })
        this.audio.addEventListener('timeupdate', () => {
            let newTime = this.audio.currentTime
            this.setState({
                currentTime: newTime
            })
        })
        this.audio.addEventListener('ended', () => {
            this.setState({
                isPlaying: false
            })
        })
    }

    togglePlayPause = () => {
        let newPlayingState = !this.state.isPlaying
        if(newPlayingState === true){
            this.audio.play()
        }
        else {
            this.audio.pause()
        }
        this.setState({
            isPlaying: newPlayingState
        })
    }

    fastForward = () => {
        let newTime = this.state.currentTime + 15
        if(newTime < this.state.totalDuration) {
            this.audio.currentTime = newTime
            this.setState({
                currentTime: newTime
            })
        }
    }

    progressBarForward = (data) => {
        let newTime = this.state.totalDuration * data.currentStep / data.totalSteps
        if(newTime < this.state.totalDuration) {
            this.audio.currentTime = newTime
            this.setState({
                currentTime: newTime
            })
        }
    }

    render() {
        const {children, ...props} = this.props
        const {title, fileUrl} = props
        return <div>
            <Card className={styles.root}>
                <Section>
                    <div className={styles.titleContainer}>
                        <Text>{title}</Text>
                        <Text className={styles.timeDuration}>{getTimeInMinutes(this.state.currentTime)}</Text>
                    </div>
                    <div>
                        <audio ref={this.storeAudioReference}>
                            <source src={fileUrl}/>
                            Please use a modern web browser
                        </audio>
                    </div>
                    <div className={styles.controlsContainer}>
                        <div className={styles.playNextContainer}>
                            <BG></BG>
                            <PlayPauseIcon onClick={this.togglePlayPause} isPlaying={this.state.isPlaying} className={styles.playButton}/>
                            <PlayNextIcon onClick={this.fastForward} className={styles.nextButton}/>
                        </div>
                        <div style={{position: 'relative'}}>
                            <ProgressBar progressCb={this.progressBarForward} duration={this.state.totalDuration} currentTime={this.state.currentTime} />
                        </div>
                    </div>
                </Section>
            </Card>
            <div className={styles.playerFooter}>
                <ClockIcon/>
                <span style={{verticalAlign: 'middle', marginLeft: 12}}>{getTimeInMinutes(this.state.totalDuration)} Minutes</span>
                </div>
        </div>
    }

}

export default AudioPlayer
