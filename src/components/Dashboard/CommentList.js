import React from "react";
import CommentListItem from "./CommentListItem";

//this component represents the list of comments

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return <CommentListItem comment={comment} key={index} />;
      })}
    </div>
  );
};

export default CommentList;
