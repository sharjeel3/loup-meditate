import preact from 'preact'
import styles from './Button.scss'

const Button = ({ children, ...props }) => {
    console.log(props)
    return <a className={styles.button} {...props}>{children}</a>
}

export default Button
