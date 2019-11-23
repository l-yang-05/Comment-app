import React from 'react';
import LikeButton from './Like';
import DislikeButton from './Dislike';


const RepliedComment = (props) => {
    return (
        <div className='replied-comment'>
            <h2>{props.theCommObject.commDesc}</h2>
            <div className="likeDislike">
                <LikeButton />
                <DislikeButton />
            </div>
            <button className="delete" onClick={() => props.handleReplied(props.ogCommID, props.replyCommID)}>Delete</button>
        </div>
    )
}
export default RepliedComment