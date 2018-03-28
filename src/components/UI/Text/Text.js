import preact from 'preact'
import styles from './Text.scss'
import classnames from 'classnames'

const Text = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <p {...combinedProps}>{children}</p>
}

export default Text
