import React from 'react';

export default class CommentItem extends React.Component{
    render() {
        return <li>{this.props.comment.content}</li>

    }
}
