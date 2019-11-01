import React from 'react';
import '../styles/custom.css'
import { Icon } from 'rsuite';

export class Foot extends React.Component {

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
              <p>© 2019 Kunjay Vyas. All Rights Reserved.</p>
            </div>
            </section>
        );
    }
}