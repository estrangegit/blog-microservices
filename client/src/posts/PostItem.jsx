import React from 'react';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';
import EventEmitter from 'es-event-emitter';

export default class PostList extends React.Component{

    constructor() {
        super();
        this.commentCreatedEvenEmitter = new EventEmitter();
    }

    render() {
        return <div className="card"
                    style={{ width: '30%', marginBottom: '20px', marginLeft: '1.5%', marginRight: '1.5%'}}>
                    <div className="card-body">
                        <h3>{this.props.post.title}</h3>
                        <CommentList postId={this.props.post.id}
                            commentCreatedEvenEmitter={this.commentCreatedEvenEmitter}/>
                        <CommentCreate postId={this.props.post.id}
                            commentCreatedEvenEmitter={this.commentCreatedEvenEmitter}/>
                    </div>
        </div>;
    }
}
