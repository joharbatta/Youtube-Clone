import React from "react";

//it representseach individual Video in videolist
const VideoListItem = ({ video, setCurrentVideo }) => {
  return (
    <div className="video-tile" onClick={() => setCurrentVideo(video)}>
      <div>
        <img src={video.snippet.thumbnails.medium.url} className="img-tile" />
      </div>
      <div>
        <p className="title-text">{video.snippet.title}</p>
        <p className="channel-title-text">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoListItem;
