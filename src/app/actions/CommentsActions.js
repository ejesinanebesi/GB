import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENTS } from '../constants/commentsConstants';

export  default class CommentsActions
{
    static getComments(){
        return{
            type: GET_COMMENTS,
            payload: axios.get('https://jsonplaceholder.typicode.com/comments')
        }
    };

    static addComment(postId, name, email, body)
    {
        let newComment = {
            postId, name, email, body
        };

        return {
            type: ADD_COMMENTS,
            payload: newComment
        }
    };
}
