import React from 'react';
import { Placeholder } from 'rsuite';

const { Paragraph } = Placeholder;

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuccess: false,
            username: "No Name",
            backdrop: false,
            show: true
        ***REMOVED***
    }

    nameupdate = f => {
        this.setState({ username: document.getElementById('username').value });
        this.setState({usuccess: f});
    }

    render() {
      return (
        <div>
          <h3></h3>
          <hr/>
        </div>
      );
    }
}