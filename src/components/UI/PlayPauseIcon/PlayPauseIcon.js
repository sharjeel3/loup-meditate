import preact, {Component} from 'preact'
import styles from './PlayPauseIcon.scss'
import classnames from 'classnames'

const PlayIcon = () => {
    return <svg width={71} height={81} viewBox="0 0 71 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="PlayCanvas" transform="translate(275 184)">
            <g id="PlayPolygon">
                <mask id="Playmask0_outline_ins">
                    <use xlinkHref="#Playpath0_fill" fill="white" transform="matrix(-0.003696 0.999993 -0.999993 -0.003696 -204.828 -189.828)" />
                </mask>
                <g mask="url(#Playmask0_outline_ins)">
                    <use xlinkHref="#Playpath1_stroke_2x" transform="matrix(-0.003696 0.999993 -0.999993 -0.003696 -204.828 -189.828)" fill="#222222" fillOpacity="0.75" />
                </g>
            </g>
        </g>
        <defs>
            <path id="Playpath0_fill" d="M 46.5 0L 86.7702 69.75L 6.22982 69.75L 46.5 0Z" />
            <path id="Playpath1_stroke_2x" d="M 46.5 0L 55.1603 -5L 46.5 -20L 37.8397 -5L 46.5 0ZM 86.7702 69.75L 86.7702 79.75L 104.091 79.75L 95.4304 64.75L 86.7702 69.75ZM 6.22982 69.75L -2.43043 64.75L -11.0907 79.75L 6.22982 79.75L 6.22982 69.75ZM 37.8397 5L 78.1099 74.75L 95.4304 64.75L 55.1603 -5L 37.8397 5ZM 86.7702 59.75L 6.22982 59.75L 6.22982 79.75L 86.7702 79.75L 86.7702 59.75ZM 14.8901 74.75L 55.1603 5L 37.8397 -5L -2.43043 64.75L 14.8901 74.75Z" />
        </defs>
    </svg>
}

const PauseIcon = () => {
    return <svg width={48} height={79} viewBox="0 0 48 79" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="PauseCanvas" transform="translate(193 183)">
            <g id="PauseLine1">
                <use xlinkHref="#Pausepath0_stroke" transform="matrix(6.12323e-17 1 -1 6.12323e-17 -193 -183)" fill="#222222" fillOpacity="0.75" />
            </g>
            <g id="PauseLine2">
                <use xlinkHref="#Pausepath0_stroke" transform="matrix(6.12323e-17 1 -1 6.12323e-17 -155 -183)" fill="#222222" fillOpacity="0.75" />
            </g>
        </g>
        <defs>
            <path id="Pausepath0_stroke" d="M 0 0L 79 0L 79 -10L 0 -10L 0 0Z" />
        </defs>
    </svg>
}

class PlayPauseIcon extends Component{
    constructor(props){
        super(props)
        this.state = {
            play: true
        }
    }

    render() {
        const { className, isPlaying, ...restProps } = this.props
        const combinedProps = {
            className: classnames(styles.root, className),
            ...restProps
        }
        return <span {...combinedProps}>
            {
                isPlaying
                ?
                    <PauseIcon/>
                :
                    <PlayIcon/>
            }
        </span>
    }
}

export default PlayPauseIcon
