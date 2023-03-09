import React from "react";
import { WebchatContext } from "@botonic/react";

const CustomCover = (props) => {
  const context = React.useContext(WebchatContext);

  const close = () => {
    context.sendPayload("start");
    props.closeComponent();
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "calc(100% - 60px)",
        top: 60,
        left: 0,
        right: 0,
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Welcome message.</h3>
      <button
        onClick={close}
        style={{
          padding: "12px 16px",
          background: "#26BBED",
          border: "none",
          borderRadius: 4,
          color: "#FFF",
          cursor: "pointer",
        }}
      >
        START
      </button>
      <p style={{ marginTop: 20 }}>Helper message</p>
    </div>
  );
};

export default CustomCover;
