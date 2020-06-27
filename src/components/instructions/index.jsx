import React from "react";
import Toggle from "../toggle";
import "./index.css";

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

  const { theme, onToggleTheme } = props;

  return (
    <div>
      <h1>Instructions</h1>
      <br />
      <br />
      <br />
      <article style={{ textAlign: "left" }}>
        <h3> Please follow these commands: </h3>
        <span style={styles.codeStyle}>!search music_name</span>:
        <ol>
          <li>A search list will appear</li>
          <li>Only enter the number of the song you want to listen.</li>
          <li>Example: 3</li>
        </ol>
        <p>
          <span style={styles.codeStyle}>!play music_name</span>: to play a
          video
        </p>
        <p>
          <span style={styles.codeStyle}>!pause</span>: to pause current playing
          music
        </p>
        <p>
          <span style={styles.codeStyle}>!stop</span>: To stop playing
        </p>
        <p>
          <span style={styles.codeStyle}>!volume desired_volume</span>: To set
          volume <br /> Example: !volume 71
        </p>
      </article>
      <br />
      <br />
      <article>
        <Toggle theme={theme} toggleTheme={onToggleTheme} />
        <p>{theme} mode</p>
      </article>
      <br />
      <article>
        <p>
          Made with{" "}
          <span
            className="fas fa-heart fa-2x animated pulse"
            style={{ color: "red" }}
          ></span>{" "}
          by Anurag
        </p>
      </article>
    </div>
  );
};

export default Instructions;
