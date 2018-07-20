import React from 'react';
import Comment from '../../components/Comments/Comment';
//import Comment from './Comment';

export  default class CommentsList extends React.Component
{
    render () {
        if(!this.props.comments.length) {
            return null;
        }

        let comments = this.props.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />;
        } );

        return <div>
            <h1>Комментарии</h1>
            {comments}
        </div>
    }
}