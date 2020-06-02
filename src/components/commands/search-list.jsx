import React from "react";

const SearchList = (props) => {
  const styles = {
    codeStyle: {
      color: "orangered",
      fontFamily: "roboto",
      borderRadius: "5px",
      padding: "2px",
      background: "#333655",
    },
    searchDiv: {
      fontFamily: "monospace",
      textAlign: "left",
      marginTop: "10px",
    },
    list: {
      listStyleType: "none",
      border: "2px solid darkgoldenrod",
      borderRadius: "5px",
      marginTop: "10px",
      padding: "5px 10px",
      background: "#333655",
    },
    listElement: {
      padding: "5px 10px",
      fontSize: "14px",
    },
  };
  return (
    <div className="row">
      <div className="col" style={styles.searchDiv}>
        <h6>
          Please type the number of the song you want to play,{" "}
          <span style={styles.codeStyle}>!dismiss</span> to dismiss.
        </h6>
        <ul className="list-group" style={styles.list}>
          {props.videos.map((video, index) => (
            <li key={video.id.videoId} style={styles.listElement}>
              {index + 1}. {video.snippet.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
