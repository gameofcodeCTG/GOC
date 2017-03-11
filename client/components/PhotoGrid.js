import React, {Component} from 'react';
import {Link} from 'react-router';

class PhotoGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <pre>
                          {JSON.stringify(this.props.posts, null, ' ')}
                    </pre>
                </div>
                );
    }
}
;

export default PhotoGrid;