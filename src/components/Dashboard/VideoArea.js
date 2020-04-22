import React, { Component } from "react";
import VideoList from "./VideoList";
import Player from "./Player";
import VideoDetails from "./VideoDetails";
import CommentSection from "./CommentSection";

class VideoArea extends Component {
  state = {};
  render() {
    const {
      loading,
      videoList,
      currentVideo,
      setCurrentVideo,
      isLiked,
      toggleLike,
      postComment,
      comments,
      error,
      errorMessage
    } = this.props;
    if (loading) {
      return <h1 className="centered-text">Loading...</h1>;
    }
    if (error) {
      return <h1 className="centered-text">{errorMessage}</h1>;
    }
    return (
      <div className="video-area">
        <div className="player-container">
          <Player videoId={currentVideo.id} />
          <VideoDetails
            video={currentVideo}
            toggleLike={toggleLike}
            isLiked={isLiked}
          />
          <CommentSection
            postComment={postComment}
            comments={comments}
            currentVideo={currentVideo}
          />
        </div>
        <div className="list-container">
          <VideoList videos={videoList} setCurrentVideo={setCurrentVideo} />
        </div>
      </div>
    );
  }
}

export default VideoArea;
