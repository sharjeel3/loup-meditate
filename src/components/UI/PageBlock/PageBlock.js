import preact from 'preact'
import styles from './PageBlock.scss'
import classnames from 'classnames'

const PageBlock = ({ children, ...props }) => {
    const { className, ...restProps } = props
    const combinedProps = {
        className: classnames(styles.root, className),
        ...restProps
    }
    return <div {...combinedProps}>{children}</div>
}

export default PageBlock
