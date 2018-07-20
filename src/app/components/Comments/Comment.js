import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                   <Link to={`/Comments/${this.props.id}`}><h3 className="panel-title">{this.props.postId}</h3></Link>
                </div>
                <div className="panel-body">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}
