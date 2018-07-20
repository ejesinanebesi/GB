import * as CommentsConstants from '../constants/commentsConstants';

export  function commentsReducer(state = {comments: [], is_loading: false}, action) {
    switch (action.type)
    {
        case CommentsConstants.GET_COMMENTS_PENDING: {
            state = {...state, is_loading: true};
            break;
        }

        case CommentsConstants.GET_COMMENTS_FULFILLED: {
            state = {...state, is_loading: false, comments: action.payload.data};
            break;
        }

        case CommentsConstants.GET_COMMENTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
            break;
        }

        case CommentsConstants.ADD_COMMENTS: {
            let comments = state.comments;
            comments.push(action.payload);
            state = {...state, comments};
            break;
        }
    }
    return state;
}