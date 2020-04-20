import React,{Component} from 'react';
import SearchBar from './SearchBar'
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
      
      }
    
      showError = errorMessage => {
     
      };
    
      popularVideoList = () => {
       
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
       
      };
    
      toggleLike = () => {
       
      };
    
    
      postComment = commentObj => {
      
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
          
          </div>
        );
      }

}


export default dashboard;