import React from "react";
function ReplyForm(props) {
    return (
        <form>
            <textarea placeholder="Enter in your reply here!" className="comment-box" />
            <button type="button" onClick={(event) => props.handleReplyPost(event, props.index)}>Post Reply </button>
        </form>
    );
}
export default ReplyForm;