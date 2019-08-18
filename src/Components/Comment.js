import React from 'react';


class Comments extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Author: {this.props.author}</p>
                <p>Comment: {this.props.comment}</p>
            </div>
        )
    }
}


export default Comments;