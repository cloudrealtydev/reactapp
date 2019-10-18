import React from 'react';
import 'rsuite/dist/styles/rsuite-dark.css';
import { Button, Badge } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Divider } from 'rsuite';
import { Toggle } from 'rsuite';
import { Input } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';

const { Paragraph } = Placeholder;

export class Dark extends React.Component {

    state = {
        success: false,
        usuccess: false,
        darkMode: false,
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
            <div>{this.state.success ? 
            (<link rel="stylesheet" type="text/css" href='rsuite-dark.css'/>) : 
            (<link rel="stylesheet" type="text/css" href='rsuite-default.css'/>)}
            </div>
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
