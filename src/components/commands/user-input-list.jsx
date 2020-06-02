import React from "react";

const UserInputList = (props) => {
  return (
    <ul className="list-group" style={{ listStyleType: "none" }}>
      {props.commands.map((cmd, index) => (
        <li
          key={index}
          style={{
            border: "2px solid mistyrose",
            borderRadius: "5px",
            marginTop: "10px",
            padding: "5px 10px",
            textAlign: "left",
            background: "#333655",
          }}
        >
          {cmd}
        </li>
      ))}
    </ul>
  );
};

export default UserInputList;
