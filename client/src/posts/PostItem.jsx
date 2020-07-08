import React from 'react';

export default class PostList extends React.Component{

    render() {
        return <div className="card"
                    style={{ width: '30%', marginBottom: '20px'}}>
                    <div className="card-body">
                        <h3>{this.props.post.title}</h3>
                    </div>
        </div>;
    }
}
