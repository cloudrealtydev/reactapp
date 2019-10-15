import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Divider } from 'rsuite';

const { Paragraph } = Placeholder;

class Header extends React.Component {
    render() {
        return(
            <section>

            </section>
        );
    }
}

class App extends React.Component {
    render() {
      return (
        <div className="App" style={{margin:30 + 'px'}}>
            <Button appearance="primary"> Hello world </Button>
            <Divider>Hello World!</Divider>
            <p>Default:</p>
            <Paragraph style={{marginTop:30}} />
            <hr/>
            <p>You can also add a round or square icon to the left:</p>
            <Paragraph style={{marginTop:30}} graph='circle' />
            <Paragraph style={{marginTop:30}} graph='square' />
            <hr/>
            <p>You can also customize the number of lines, spacing, etc.:</p>
            <Paragraph style={{marginTop:30}} rows={5} graph active />
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();