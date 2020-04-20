import React,{Component} from 'react';

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
            
          </div>
        );
      }

}


export default dashboard;