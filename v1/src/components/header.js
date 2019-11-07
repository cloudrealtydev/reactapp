import React from 'react';
import '../styles/custom.css'
import { Navbar, Nav, Toggle, Icon, Col } from 'rsuite';
import {Helmet} from "react-helmet";

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey} >
            <Nav.Item eventKey="2">Hello World!</Nav.Item>
            <Nav.Item eventKey="3">Work</Nav.Item>
            <Nav.Item eventKey="4">Contact</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
***REMOVED***

export const theme = React.createContext();

export class Head extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          activeKey: this.props.activeKey,
          success: false
        ***REMOVED***
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({ activeKey: eventKey });
    }

    change = e => {
      this.setState({ success: e });
    ***REMOVED***

    render() {
        const { activeKey } = this.state;
        return(
            <section>
              <div className="verticalnav">
                <Helmet>
                  {this.state.success ? 
                  (<link rel="stylesheet" type="text/css" href='/rsuite-default.min.css'/>) : 
                  (null)}
                </Helmet>
                <Col xs={8} style={{marginLeft: -18}}>
                  <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={this.handleSelect} />
                </Col>
                <div style={{float: "right", marginTop: 15}}>
                  {this.state.success ? 
                  (<Toggle size="md" checkedChildren="Light" unCheckedChildren="Dark" onChange={this.change} defaultChecked/>) : 
                  (<Toggle size="md" checkedChildren="Light" unCheckedChildren="Dark" onChange={this.change} />)}
                </div>
              </div>
            </section>
        );
    }
}