import React from "react";

const Instructions = (props) => {
  const styles = {
    codeStyle: {
      color: "orangered",
      fontFamily: "roboto",
      borderRadius: "5px",
      padding: "2px",
      background: "#333655",
    },
  };

  return (
    <div>
      <h1>Instructions</h1>
      <br />
      <br />
      <br />
      <article style={{ textAlign: "left" }}>
        <h3> Please follow these commands: </h3>
        <p>
          <span style={styles.codeStyle}>!search video_name</span>:
          <ol>
            <li>A search list will appear</li>
            <li>Only enter the number of the song you want to listen.</li>
            <li>Example: 3</li>
          </ol>
        </p>
        <p>
          <span style={styles.codeStyle}>!play video_name</span>: to play a
          video
        </p>
        <p>
          <span style={styles.codeStyle}>!pause</span>: to pause current playing
          video
        </p>
        <p>
          <span style={styles.codeStyle}>!stop</span>: To stop playing
        </p>
        <p>
          <span style={styles.codeStyle}>!volume desired_volume</span>: To set
          volume <br /> Example: !volume 71
        </p>
      </article>
    </div>
  );
};

export default Instructions;
