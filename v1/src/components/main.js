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
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
      }
      close() {
        this.setState({ show: false });
      }
      open() {
        this.setState({ show: true });
      }

    nameupdate = f => {
        this.setState({ username: document.getElementById('username').value });
        this.setState({usuccess: f});
    }

    render() {
    const { backdrop, show } = this.state;
      return (
        <div>
          <h3>Welcome To The Jungle!</h3>
          <hr/>
        </div>
      );
    }
}