import preact from 'preact'
import styles from './TextLink.scss'
import classnames from 'classnames'

const TextLink = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <a {...combinedProps}>{children}</a>
}

export default TextLink
