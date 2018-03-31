import preact, {Component} from 'preact'
import styles from './style.scss'
import {Card, Section, Text, ProgressBar, PlayNextIcon, PlayPauseIcon} from '../../components/UI'

class AudioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalDuration: 0,
            currentTime: 0,
            isPlaying: false
        }
    }

    getTimeInMinutes(duration) {
        let minutes = Math.floor(duration/60)
        let seconds = Math.floor(duration - minutes * 60)
        return minutes + ":" + (seconds < 10  ? '0' : '') + seconds
    }

    storeAudioReference = audio => {
        if(audio !== null) {
            this.audio = audio
        }
    }

    componentDidMount() {
        this.events()
        setTimeout(()=>{
            //this.audio.currentTime = this.audio.currentTime + 200
        }, 2000)
    }

    componentDidUpdate() {

    }

    events() {
        this.audio.addEventListener('loadedmetadata', () => {
            this.setState({
                totalDuration: this.audio.duration
            })
        })
        this.audio.addEventListener('play', () => {
            //console.log('play event')
        })
        this.audio.addEventListener('playing', () => {
            //console.log('playing event')
        })
        this.audio.addEventListener('timeupdate', () => {
            //console.log('timeupdate event')
            let newTime = this.audio.currentTime
            this.setState({
                currentTime: newTime
            })
        })
        this.audio.addEventListener('ended', () => {
            //console.log('ended event')
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
        let newTime = this.state.currentTime + 20
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
        return <Card className={styles.root}>
            <Section>
                <div className={styles.titleContainer}>
                    <Text>{title}</Text>
                    <Text className={styles.timeDuration}>{this.getTimeInMinutes(this.state.currentTime)}</Text>
                </div>
                <div>
                    <audio controls ref={this.storeAudioReference}>
                        <source src={fileUrl}/>
                        Please use a modern web browser
                    </audio>
                </div>
                <div className={styles.controlsContainer}>
                    <div className={styles.playNextContainer}>
                        <PlayPauseIcon onClick={this.togglePlayPause} isPlaying={this.state.isPlaying} className={styles.playButton}/>
                        <PlayNextIcon onClick={this.fastForward} className={styles.nextButton}/>
                    </div>
                    <div>
                        <ProgressBar/>
                    </div>
                </div>
            </Section>
        </Card>
    }

}

export default AudioPlayer
