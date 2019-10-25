import React from 'react';
import '../styles/custom.css'
import { Icon } from 'rsuite';
import { Navbar } from 'rsuite';
import Nav from "@rsuite/responsive-nav";

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Body>
          <Nav>
          <Nav.Item eventKey="1"><Icon icon="creative" /></Nav.Item>
          </Nav >
          <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
            <Nav.Item eventKey="2">Hello World!</Nav.Item>
            <Nav.Item eventKey="3">Work</Nav.Item>
            <Nav.Item eventKey="4">Contact</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
};

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          activeKey: '2'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({ activeKey: eventKey });
    }

    render() {
        const { activeKey } = this.state;
        return(
            <section>
            <div className="verticalnav">
            <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={this.handleSelect} />
            </div>
            </section>
        );
    }
}