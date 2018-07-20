import React from 'react';
import CommentsList from '../../components/Comments/CommentsList';
import CommentsActions from '../../actions/CommentsActions';
import store from '../../stores/store';
//Связка со стором
import {connect} from 'react-redux';

class Comments extends React.Component
{
    componentDidMount()
    {
        let comments = CommentsActions.getComments();
        this.props.dispatch(comments);

    }

    render() {
        if(this.props.is_loading){
            return <p>Загрузка</p>;
        }

        return <div>
            {
                (!this.props.children) ?
                    (<CommentsList comments={this.props.comments} />)
                    :
                    (this.props.children)
            }
        </div>;
    }
}

function mapStateToProps(store) {
    return {
        comments: store.comments.comments ,
        is_loading: store.comments.is_loading
    }
}

//Связка со стором
export default connect(mapStateToProps)(Comments);