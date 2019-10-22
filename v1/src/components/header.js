import React from 'react';
import '../styles/custom.css'
import { Icon } from 'evergreen-ui';
import { Steps } from 'rsuite';
import { Nav, Dropdown } from 'rsuite';

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect}>
        <Nav.Item eventKey="contact">Contact</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
        <Nav.Item eventKey="work">Work</Nav.Item>
      </Nav>
    );
};

export class Header extends React.Component {

    constructor() {
        super();
        this.state = {
          active: 'work'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({ active: activeKey });
    }

    render() {
        const { active } = this.state;
        return(
            <div>
                <Icon 
            </div>
            <div className="verticalnav">
            <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
            {/* <Steps >
                <Steps.Item title="Contact" />
                <Steps.Item title="About" />
                <Steps.Item title="Work" />
            </Steps> */}
            </div>
        );
    }
}