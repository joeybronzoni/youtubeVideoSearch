import React from 'react';

/* this is without es6
const VideoListItem = (props) => {
  const video = props.video;
  return <li>Video</li>;
};*/

// we can refactor this VideoListItem with es6 like this:
const  VideoListItem = ({ video, onVideoSelect }) => {
 /* the onVideoSelect() has onVideoSelect available from index.js because pass it as
  a property to first video_list then to video_list_items*/
  const imageUrl = video.snippet.thumbnails.default.url;
  // ({video}) is equal to const video = props.video;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

      <div className="media-body">
        <div className="media-heading">
		  {video.snippet.title}
        </div>
      </div>
    </div>
   </li>
  );
};
export default VideoListItem;
