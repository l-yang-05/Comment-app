import React from 'react';
import Comments from './Comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    render() {
        return (
            <div>
                <p> Comment List</p>
                <Comments author="mike" comment="hi there, hope this works" />
            </div>
        )
    }
}

export default CommentList;