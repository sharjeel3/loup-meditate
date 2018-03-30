import preact from 'preact'
import styles from './ProgressBar.scss'
import classnames from 'classnames'

const Icon = () => {
    return 'progress'
}

const ProgressBar = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <div {...combinedProps}><Icon/></div>
}

export default ProgressBar
