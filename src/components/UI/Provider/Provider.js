import preact from 'preact'
import styles from './Provider.scss'
import Helmet from 'preact-helmet'

const UIProvider = ({children, helmet, ...props}) => (
    <div className={styles.root}>
        <Helmet {...helmet}></Helmet>
        {children}
    </div>
)

export default UIProvider
