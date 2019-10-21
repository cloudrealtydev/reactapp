import React from 'react';
import 'rsuite/dist/styles/rsuite-dark.css';
import '../styles/custom.css'
import { Icon } from 'rsuite';
import { Steps } from 'rsuite';



export class Header extends React.Component {

    constructor() {
        super();
        this.state = {
          active: 'hello'
        ***REMOVED***
    }
    render() {
        return(
            <div className="verticalnav">
            <Steps >
                <Steps.Item title="Contact" />
                <Steps.Item title="About" />
                <Steps.Item title="Work" />
            </Steps>
            </div>
        );
    }
}