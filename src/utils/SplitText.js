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
          <span
            style={{
              diplay: "inline-block",
              transform: "skewX(0) translateY(0)",
            }}
            aria-hidden="true"
            key={index}
          >
            {char}
          </span>
        )
      )}
    </span>
  );
};

export default SplitText;
