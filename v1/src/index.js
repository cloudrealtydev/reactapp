import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-dark.css';
import './styles/custom.css';
import { Header } from './components/header';
import { Main } from './components/main';


class App extends React.Component {

    state = {
        darkMode: false
    ***REMOVED***

    render() {
      return (
            <div className="App appmain">
            <Header />
            <Main />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();