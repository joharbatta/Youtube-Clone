import React, { Component } from "react";
import VideoListItem from "./VideoListItem";

//It represents the list of trending videos/search results at right side
class VideoList extends Component {
  state = {};
  render() {
    const { videos, setCurrentVideo } = this.props;
    return (
      <div>
        {videos.map((video, index) => {
          return (
            <VideoListItem
              key={index}
              video={video}
              setCurrentVideo={setCurrentVideo}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
