import React,{Component} from 'react';
import SearchBar from './SearchBar'
import VideoArea from "./VideoArea";
import { getTrendingVideos, getSearchResult } from "./api";
class dashboard extends Component{

    state={
        videoList:null,
        loading:true,
        currentVideo: null,
        isLiked: false,
        comments: [],
        error: false,
    };

    componentDidMount() {
        this.popularVideoList();
      }
    
      showError = errorMessage => {
        this.setState({ error: true, loading: false, errorMessage: errorMessage });
      };
    
      popularVideoList = () => {
        getTrendingVideos()
        .then(response => {
          console.log(response);
          if (response.items.length > 0) {
            this.setState({
              videoList: response.items,
              currentVideo: response.items[0],
              loading: false
            });
          } else {
            let errorMessage = "Unable to Load Videos";
            this.showError(errorMessage);
          }
        })
        .catch(error => {
          this.showError(error.message);
        });
       
      };
    
      searchVideo = query => {
        this.setState({ loading: true, error: false });
        getSearchResult(query)
          .then(response => {
            console.log(response);
            if (response.items.length > 0) {
              this.setState({
                videoList: response.items,
                currentVideo: response.items[0],
                loading: false,
                comments: []
              });
            } else {
              let errorMessage = "No Videos Found";
              this.showError(errorMessage);
            }
          })
          .catch(error => {
            this.showError(error.message);
          });
       
      };
    

      setCurrentVideo = video => {
        if (video !== this.state.currentVideo) {
            this.setState({
              currentVideo: video,
              isLiked: false,
              comments: []
            });
          }
      };
    
      toggleLike = () => {
        this.setState({
            isLiked: !this.state.isLiked
          });
      };
    
    
      postComment = commentObj => {
        const { userName, commentText } = commentObj;
        if (userName.length > 0 && commentText.length > 0) {
          const updatedComments = this.state.comments;
          updatedComments.push(commentObj);
          this.setState({
            comments: updatedComments
          });
        }
      };

      render() {
        const {
          videoList,
          loading,
          currentVideo,
          isLiked,
          comments,
          error,
          errorMessage
        } = this.state;
        return (
          <div>
            <SearchBar searchVideo={this.searchVideo} />
            <VideoArea
            videoList={videoList}
            loading={loading}
            currentVideo={currentVideo}
            setCurrentVideo={this.setCurrentVideo}
            toggleLike={this.toggleLike}
            isLiked={isLiked}
            postComment={this.postComment}
            comments={comments}
            error={error}
            errorMessage={errorMessage}
            />
          </div>
        );
      }

}


export default dashboard;