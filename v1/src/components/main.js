import React from 'react';
import { Button, Badge } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Divider } from 'rsuite';
import { Toggle } from 'rsuite';
import { Input } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import {Helmet} from "react-helmet";

const { Paragraph } = Placeholder;

export class Main extends React.Component {

    state = {
        success: false,
        usuccess: false,
        username: "No Name"
    };
      
    change = e => {
        this.setState({ success: e });
    };

    nameupdate = f => {
        this.setState({ username: document.getElementById('username').value });
        this.setState({usuccess: f});
    }

    render() {
      return (
        <div>
            <Helmet>
            {this.state.success ? 
            (<link rel="stylesheet" type="text/css" href='/rsuite-default.min.css'/>) : 
            (<meta name="author" content="cloudrealtydev" />)}
            </Helmet>
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