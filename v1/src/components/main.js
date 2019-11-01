import React from 'react';
import { Button, Badge } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Panel, PanelGroup } from 'rsuite';
import { Divider } from 'rsuite';
import { Input } from 'rsuite';
import { Grid, Table, Col } from 'rsuite';


const { Paragraph } = Placeholder;

export class Main extends React.Component {

    state = {
        usuccess: false,
        username: "No Name"
    ***REMOVED***

    nameupdate = f => {
        this.setState({ username: document.getElementById('username').value });
        this.setState({usuccess: f});
    }

    render() {
      return (
        <div>
            {/* <Input style={{ width: 300 }, {marginBottom: 30 + 'px'}} placeholder="Your Name Here Please!" 
            id="username" onChange={this.nameupdate} />
            <Col xs={12}>
                <Button>
                    Hello, {this.state.usuccess ? (this.state.username) : ("Stranger")}
                </Button>
            </Col><br></br>
            <Divider>Hello World!</Divider> */}

            <Panel header="Welcome To The Jungle!" /* className='card' */>
                <h1>Welcome To The Jungle!</h1>
            <hr/>
            </Panel>
        </div>
      );
    }
}