import React from "react";
import ReactDOM from "react-dom";
import "./Overlay.css";

const Aoverlay = (props) => {
  return (
    <div className="overlay-wrapper">
      <div className="overlay-container">
        <h1>Description</h1>
        <p>
          This application takes expenses spent over months and years, and
          filters them upon selected interval
        </p>
        <div className="button-wrapper">
          <button onClick={props.onClick}>Close</button>
        </div>
      </div>
    </div>
  );
};
const Overlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Aoverlay onClick={props.onClick} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Overlay;
