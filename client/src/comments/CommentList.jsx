import React from 'react';
import CommentItem from './CommentItem';
import axios from 'axios';

export default class CommentList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {comments: []};
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount() {
        this.fetchComments();

        this.props.commentCreatedEvenEmitter.on(`new-comment-created-${this.props.postId}`, () => {
            this.fetchComments();
        });
    }

    fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${this.props.postId}/comments`);
        this.setState({comments: res.data})
    }

    render() {
        const renderedComments = this.state.comments.map((comment) =>
            <CommentItem key={comment.id} comment={comment}/>
        );
        return <ul>{ renderedComments }</ul>;
    }
}
