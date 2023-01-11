import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentsOfVideoById } from "../../redux/actions/comments.action";
import Comment from "../comment/comment";
import "./_comments.scss";

const Comments = ({videoId, totalComments}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId))
  }, [videoId, dispatch])

  const comments = useSelector(state=>state.commentList.comments)

  const [text, setText] = useState('');

  const _comments = comments?.map(comment=>comment.snippet.topLevelComment.snippet)
  
  const handleComment = (e) => {
    e.preventDefault();
    if(text.length === 0) return
      dispatch(addComment(videoId,text))
      setText('');
  };
  const { photoURL } = useSelector(state => state.auth?.user)
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src={photoURL} alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            value={text}
           onChange={e=>setText(e.target.value)}
            className="flex-grow-1 "
            placeholder="Write a comment ..."
          />
          <button type="submit" className="border-0 py-2">
            Comment
          </button>
        </form>
      </div>

        <div className="comments__list">
          {_comments?.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        
      </div>
    </div>
  );
};

export default Comments;
