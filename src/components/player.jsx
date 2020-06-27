import React, { Component } from "react";
import VideoDetail from "./VideoDetail";
import _ from "lodash";

import "./player.scss";

class Player extends Component {
  state = {};
  render() {
    const { video, onVideoEvent } = this.props;
    const {
      channelId,
      publishedAt,
      title,
      description,
      thumbnails,
      channelTitle,
    } = !_.isEmpty(video) ? video.snippet : {};
    const imageURl = !_.isEmpty(video) ? thumbnails.medium.url : "";
    const publishedDate = !_.isEmpty(video) ? publishedAt.split("T")[0] : "";
    return (
      <div className="Player">
        <div className="Background"></div>
        <div className="Header">
          <div className="Title">Now Playing</div>
        </div>
        <div className="Artwork">
          <img src={imageURl} />
        </div>
        <div className="TrackInformation">
          <div className="Name"></div>
          <div className="Artist">{title}</div>
          {/* <div className="Album">{description}</div> */}
        </div>
        <div className="Scrubber">
          <div className="Scrubber-Progress"></div>
        </div>
        <div className="Controls">
          <div className="Button">
            {/* <i className="fab fa-fw fa-play"></i> */}
            <img src="assets/mchammer.gif" className="hammertime"></img>
          </div>
        </div>
        <div className="Timestamps">
          <div className="Time Time--current">{publishedDate}</div>
          <div className="Time Time--total">{channelTitle}</div>
        </div>
        {!_.isEmpty(video) && (
          <VideoDetail video={video} onVideoEvent={(c) => onVideoEvent(c)} />
        )}
      </div>
    );
  }
}

export default Player;
