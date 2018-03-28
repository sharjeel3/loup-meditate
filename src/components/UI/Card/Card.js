import preact from 'preact'
import styles from './Card.scss'
import classnames from 'classnames'

const Card = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <div {...combinedProps}>{children}</div>
}

export default Card
