import React, {Component} from 'react';
import {Link} from 'react-router';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <h1>
                        <Link to="/">Super Better Town</Link>
                    </h1>
                    {React.cloneElement(this.props.children,this.props)}
                </div>
                );
    }
}
;

export default Main;