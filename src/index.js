import { Provider } from 'preact-redux';
import store from './store';
import './style';
import App from './components/app';

const MainApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default MainApp;
