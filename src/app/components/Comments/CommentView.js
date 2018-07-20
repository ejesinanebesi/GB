import React from 'react';
import axios from 'axios';
import CommentsId from '../../components/Comments/Comment';

export default class CommentView extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            comment: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then((response) => {
                this.setState({
                    comment: response.data
                });
            });
    }
    render()
    {
        return (
            <div>
                {this.state.comment && <CommentsId {...this.state.comment}/>}
            </div>
        );
    }
}