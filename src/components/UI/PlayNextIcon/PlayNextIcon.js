import preact from 'preact'
import styles from './PlayNextIcon.scss'
import classnames from 'classnames'

const Icon = () => {
    return <svg width={92} height={81} viewBox="0 0 92 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="NextCanvas" transform="translate(275 184)">
            <g id="NextPolygon">
                <mask id="Nextmask0_outline_ins">
                    <use xlinkHref="#Nextpath0_fill" fill="white" transform="matrix(-0.003696 0.999993 -0.999993 -0.003696 -204.828 -189.828)" />
                </mask>
                <g mask="url(#Nextmask0_outline_ins)">
                    <use xlinkHref="#Nextpath1_stroke_2x" transform="matrix(-0.003696 0.999993 -0.999993 -0.003696 -204.828 -189.828)" fill="#222222" fillOpacity="0.75" />
                </g>
            </g>
            <g id="Line">
                <use xlinkHref="#Nextpath2_stroke" transform="matrix(6.12323e-17 1 -1 6.12323e-17 -193 -183)" fill="#222222" fillOpacity="0.75" />
            </g>
        </g>
        <defs>
            <path id="Nextpath0_fill" d="M 46.5 0L 86.7702 69.75L 6.22982 69.75L 46.5 0Z" />
            <path id="Nextpath1_stroke_2x" d="M 46.5 0L 55.1603 -5L 46.5 -20L 37.8397 -5L 46.5 0ZM 86.7702 69.75L 86.7702 79.75L 104.091 79.75L 95.4304 64.75L 86.7702 69.75ZM 6.22982 69.75L -2.43043 64.75L -11.0907 79.75L 6.22982 79.75L 6.22982 69.75ZM 37.8397 5L 78.1099 74.75L 95.4304 64.75L 55.1603 -5L 37.8397 5ZM 86.7702 59.75L 6.22982 59.75L 6.22982 79.75L 86.7702 79.75L 86.7702 59.75ZM 14.8901 74.75L 55.1603 5L 37.8397 -5L -2.43043 64.75L 14.8901 74.75Z" />
            <path id="Nextpath2_stroke" d="M 0 0L 79 0L 79 -10L 0 -10L 0 0Z" />
        </defs>
    </svg>
}

const PlayNextIcon = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <span {...combinedProps}><Icon/></span>
}

export default PlayNextIcon
