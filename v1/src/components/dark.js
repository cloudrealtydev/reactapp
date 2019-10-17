import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-dark.css';
import { Button } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Divider } from 'rsuite';
import { Toggle } from 'rsuite';
import { Input } from 'rsuite';

const { Paragraph } = Placeholder;

class Header extends React.Component {
    render() {
        return(
            <section>
                <h1>Toggle Change</h1>
            </section>
        );
    }
}

class App extends React.Component {

    state = {
        success: false,
        username: "No Name",
    ***REMOVED***
      
    change = e => {
        console.log(e);
        this.setState({ success: e });
    ***REMOVED***

    nameupdate = f => {
        console.log(f);
        this.setState({ username: document.getElementById('username').value });
        this.change(true);
    }

    render() {
      return (
        <div className="App" style={{margin:30 + 'px'}}>
            <Input style={{ width: 300 }, {marginBottom: 30 + 'px'}} placeholder="Your Name Here Please!" 
            id="username" onChange={this.nameupdate} />
            <Button appearance="primary"> Hello world </Button>
            <Toggle size="md" checkedChildren="Light" unCheckedChildren="Dark" style={{marginLeft: 160}}
             onChange={this.change} />
            <div>{this.state.success ? (this.state.username) : (<p>Success is not yours</p>)}</div>
            <Header />
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