import React from 'react';
import DislikeButton from './dislike';
import CommentForm from './CommentForm';
import LikeButton from './Like';


class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "canIgetAbreak?",
                    comment: "Can I get a break?"
                },
                {
                    name: "hereComeDatBoi",
                    comment: "Weather is nice."
                },
                {
                    name: "quackerZ",
                    comment: "Debugging is fun :,)."
                }

            ]
        }
    }

    render() {
        return (
            <div className="commentbox">
                {this.state.list.map((item, index) => {
                    return (
                        <div className="commentBox" key={index}>
                            <div className="likeAndDislike">
                                <LikeButton />
                                <DislikeButton />
                            </div>
                            <div className="comment">
                                <h2>{item.name}</h2>
                                <p>{item.comment}</p>
                            </div>
                            <CommentForm />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;