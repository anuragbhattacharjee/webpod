import React from "react";

const CommandInput = (props) => {
  const { inputTerm, onInputChange, onCommandSubmit } = props;

  return (
    <form onSubmit={onCommandSubmit} className="ui form">
      <div className="field">
        <input
          onChange={onInputChange}
          name="command-input"
          type="text"
          placeholder="Insert your command here"
          value={inputTerm}
          style={{
            width: "100%",
            borderRadius: "7px",
            padding: "7px",
          }}
        />
      </div>
    </form>
  );
};

export default CommandInput;
