import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-dark.css';
import './styles/custom.css';
import { Container, Header, Content, Footer } from 'rsuite';
import { Head } from './components/header';
import { Main } from './components/main';
import { Foot } from './components/footer'


class App extends React.Component {

    state = {
        darkMode: false,
        page: '2'
    ***REMOVED***

    render() {
      return (
            <div className="App appmain">
            <Container>
                <Header>
                    <Head activeKey={this.state.page} />
                </Header>
                <Content>
                    <Main />
                </Content>
                <Footer>
                    <Foot />
                </Footer>
            </Container>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();