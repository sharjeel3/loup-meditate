import preact from 'preact'
import styles from './ClockIcon.scss'
import classnames from 'classnames'

const Icon = () => {
    return <svg enableBackground="new 0 0 96 96" height="96px" id="clockSVG" version="1.1" viewBox="0 0 96 96" width="96px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M48,4C23.7,4,4,23.7,4,48c0,24.301,19.7,44,44,44c24.301,0,44-19.699,44-44C92,23.7,72.301,4,48,4z M48,84  c-19.882,0-36-16.118-36-36s16.118-36,36-36s36,16.118,36,36S67.882,84,48,84z" /><path d="M52,46.343V24c0-2.209-1.791-4-4-4s-4,1.791-4,4v24c0,0.009,0.003,0.018,0.003,0.027c0.001,0.253,0.026,0.506,0.076,0.755  c0.024,0.123,0.069,0.234,0.104,0.354c0.039,0.132,0.069,0.266,0.122,0.395c0.058,0.138,0.136,0.264,0.208,0.394  c0.054,0.1,0.097,0.2,0.16,0.295c0.147,0.221,0.314,0.428,0.501,0.613l11.311,11.312c1.562,1.562,4.097,1.562,5.658,0  c1.562-1.562,1.562-4.097,0-5.656L52,46.343z" /></svg>
}

const ClockIcon = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <span {...combinedProps}><Icon/></span>
}

export default ClockIcon
