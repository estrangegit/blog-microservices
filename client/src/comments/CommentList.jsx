import React from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends React.Component {
  render() {
    const renderedComments = this.props.comments.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ));
    return <ul>{renderedComments}</ul>;
  }
}
