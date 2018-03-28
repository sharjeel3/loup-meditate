import preact from 'preact'
import styles from './Section.scss'
import classnames from 'classnames'

const Section = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <div {...combinedProps}>{children}</div>
}

export default Section
