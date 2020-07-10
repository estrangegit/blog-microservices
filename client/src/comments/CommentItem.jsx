import React from 'react';

export default class CommentItem extends React.Component{
    render() {
        let content;

        if(this.props.comment.status === 'approved'){
            content = this.props.comment.content;
        } else if(this.props.comment.status === 'pending'){
            content = 'This comment is awaiting moderation';
        } else if(this.props.comment.status === 'rejected'){
            content = 'This comment has been rejected';
        }

        return <li>{content}</li>

    }
}
