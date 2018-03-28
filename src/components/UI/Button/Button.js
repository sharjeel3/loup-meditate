import preact from 'preact'
import styles from './Button.scss'
import classnames from 'classnames'

const Button = ({ children, ...props }) => {
    console.log(props)
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.button, className),
        ...restProps
    }
    return <a {...combinedProps}>{children}</a>
}

export default Button
