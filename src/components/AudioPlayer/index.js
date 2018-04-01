import preact, {Component} from 'preact'
import styles from './style.scss'
import {Card, Section, Text, ProgressBar, PlayNextIcon, PlayPauseIcon, ClockIcon} from '../../components/UI'


const BG = () => (
    <svg style={{position: 'absolute', width: '90%', height: 85}} viewBox="0 0 226 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="BGCanvas" transform="translate(405 -13)">
            <g id="BGPolygon 2">
                <use xlinkHref="#BGpath0_fill" transform="matrix(-0.0236615 0.99972 -0.99972 -0.0236615 137.171 5.01611)" fill="#F1F1F1" />
            </g>
        </g>
        <defs>
            <path id="BGpath0_fill" d="M 37.7803 359.177C 46.307 299.679 132.202 299.679 140.728 359.177L 158.042 479.984C 162.532 511.318 138.221 539.361 106.567 539.361L 71.9413 539.361C 40.2874 539.361 15.9767 511.318 20.4672 479.984L 37.7803 359.177Z" />
        </defs>
    </svg>
)

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
                        <Text className={styles.timeDuration}>{this.getTimeInMinutes(this.state.currentTime)}</Text>
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
                <span style={{verticalAlign: 'middle', marginLeft: 12}}>{this.getTimeInMinutes(this.state.totalDuration)} Minutes</span>
                </div>
        </div>
    }

}

export default AudioPlayer
