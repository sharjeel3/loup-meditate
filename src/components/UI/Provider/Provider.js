import preact from 'preact'
import styles from './Provider.scss'

const UIProvider = ({children, ...props}) => (
    <div className={styles.root}>
        {children}
    </div>
)

export default UIProvider
