import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    // sconsole.log("you clicked button");
    let changeText = text.toUpperCase();
    setText(changeText);
    props.showAlert("Successfully converted to upper case", "success ");
  };
  const lowerCase = () => {
    let changeText = text.toLowerCase();
    setText(changeText);
    props.showAlert("Successfully converted to Lower case", "success ");
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Successfully text copied", "success ");
  };
  const clear = () => {
    setText("");
    props.showAlert("Successfully Reset", "success ");
  };

  const change = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="text-center">
          <h1>{props.heading}</h1>
          <div className="mb-3 my-3">
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
              onChange={change}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              value={text}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={upperCase}
            className="btn btn-primary m-1"
            disabled={text.length == 0}
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={lowerCase}
            className="btn btn-primary m-1"
            disabled={text.length == 0}
          >
            LowerCase
          </button>
          <button
            type="button"
            onClick={copy}
            className="btn btn-primary m-1"
            disabled={text.length == 0}
          >
            Copy
          </button>
          <button
            type="button"
            onClick={clear}
            className="btn btn-primary m-1"
            disabled={text.length == 0}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Word Details</h3>
        <p>
          No of words{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and characters are {text.length}
        </p>
        <h5>
          It will take{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          minutes to read
        </h5>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
