import React from "react";

import CommandInput from "./commands/command-input";
import UserInputList from "./commands/user-input-list";
import SearchList from "./commands/search-list";

const Command = (props) => {
  const { videos, commands, inputTerm, onInputChange, onCommandSubmit } = props;

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <CommandInput
              inputTerm={inputTerm}
              onInputChange={onInputChange}
              onCommandSubmit={onCommandSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {videos.length > 0 && <SearchList videos={videos} />}
            <UserInputList commands={commands} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
