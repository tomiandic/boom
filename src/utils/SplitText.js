import React from "react";

const SplitText = (props) => {
  return (
    <span aria-label={props.copy} role={props.role}>
      {props.copy.split("").map((char, index) =>
        char === " " ? (
          <span style={{ display: "inline" }} aria-hidden="true" key={index}>
            {char}
          </span>
        ) : (
          <span aria-hidden="true" key={index}>
            {char}
          </span>
        )
      )}
    </span>
  );
};

export default SplitText;
