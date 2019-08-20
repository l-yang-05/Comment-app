import React from 'react';
import LikeButton from './Like';
import DislikeButton from './Dislike';


const RepliedComment = (props) => {
    return (
        <div className='replied-comment'>
            <p>{props.theCommObject.commDesc}</p>
            <LikeButton />
            <DislikeButton />
            <button onClick={() => props.handleReplied(props.ogCommID, props.replyCommID)}>Delete</button>
        </div>
    )
}
export default RepliedComment