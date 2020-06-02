import React, { Component } from "react";

class VideoDetail extends Component {
  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  loadVideo = () => {
    const { video } = this.props;
    const id = video.id.videoId;

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
        // onStateChange: this.onPlayerStateChange,
      },
    });
  };

  onPlayerStateChange = (event) => {};

  onPlayerReady = (event) => {
    event.target.playVideo();
    this.props.onVideoEvent(event);
  };

  render() {
    const { video } = this.props;

    if (!video) {
      return <div>Loading ...</div>;
    }

    // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div style={{ display: "none" }}>
          {/* <iframe src={videoSrc} allowFullScreen title="Video player" /> */}
          <div id={`youtube-player`}></div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
