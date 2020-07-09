import React from 'react';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';

export default class PostList extends React.Component{

    render() {
        return <div className="card"
                    style={{ width: '30%', marginBottom: '20px', marginLeft: '1.5%', marginRight: '1.5%'}}>
                    <div className="card-body">
                        <h3>{this.props.post.title}</h3>
                        <CommentList comments={this.props.post.comments}/>
                        <CommentCreate postId={this.props.post.id}
                            commentCreatedEvenEmitter={this.props.commentCreatedEvenEmitter}/>
                    </div>
        </div>;
    }
}
