import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'rsuite/dist/styles/rsuite-dark.css';
import { Button, Badge } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Divider } from 'rsuite';
import { Toggle } from 'rsuite';
import { Input } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';

const { Paragraph } = Placeholder;

class App extends React.Component {

    state = {
        success: false,
        usuccess: false,
        username: "No Name",
    ***REMOVED***
      
    change = e => {
        console.log(e);
        this.setState({ success: e });
    ***REMOVED***

    nameupdate = f => {
        console.log(f);
        this.setState({ username: document.getElementById('username').value });
        this.setState({usuccess: f});
        console.log(f);
    }

    render() {
      return (
        <div className="App" style={{margin:30 + 'px'}}>
            <Input style={{ width: 300 }, {marginBottom: 30 + 'px'}} placeholder="Your Name Here Please!" 
            id="username" onChange={this.nameupdate} />
            <Col xs={12}>
                <Button>
                    Hello, {this.state.usuccess ? (this.state.username) : ("Stranger")}
                </Button>
            </Col>
            <Col xs={12} fluid="true">
                <div style={{float: "right"}}>
                <Toggle size="md" checkedChildren="Light" unCheckedChildren="Dark"
                onChange={this.change} />
                {/* <div>{this.state.usuccess ? (this.state.username) : ("No Name")}</div> */}
                </div>
            </Col><br></br>
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