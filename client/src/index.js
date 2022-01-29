import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import 'helpers/initFA';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Main>
            <Provider store={store}>
                <App />
            </Provider>
        </Main>
    </React.StrictMode>,
    document.getElementById('main')
);
