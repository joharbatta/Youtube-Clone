import React from "react";



const VideoDetails = ({ video, isLiked, toggleLike }) => {
  return (
    <div className="details-container">
      <div className="title-icon-view">
        <p className="details-title">{video.snippet.title}</p>
        {isLiked ? (
          <i
            className="fa fa-heart unlike-icon"
            aria-hidden="true"
            onClick={toggleLike}
          />
        ) : (
          <i
            className="fa fa-heart-o like-icon"
            aria-hidden="true"
            onClick={toggleLike}
          />
        )}
      </div>
      <p className="details-channel-title">{video.snippet.channelTitle}</p>
    </div>
  );
};
export default VideoDetails;
