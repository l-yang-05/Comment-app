import React from "react";
function ReplyForm(props) {
    return (
        <form className="reply-Form">
            <textarea placeholder="Enter in your reply here!" className="comment-box" />
            <button className="reply-button" type="button" onClick={(event) => props.handleReplyPost(event, props.index)}>Post Reply </button>
        </form>
    );
}
export default ReplyForm;