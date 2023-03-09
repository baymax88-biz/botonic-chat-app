import React from "react";
import { staticAsset } from "@botonic/react";

import ResizeIcon from "../assets/resize-icon.svg";
import MinimizeIcon from "../assets/minimize-icon.svg";

export const CustomHeader = () => {
  const onMinimize = () => {
    console.log("dy-debug", Botonic);
    Botonic.close();
  };

  return (
    <div
      style={{
        background: "#26BBED",
        padding: "20px 16px",
        color: "#FFF",
        fontFamily: "Open Sans",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        position: "relative",
      }}
    >
      Chatbot
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 16,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          style={{ height: 16, width: 16, cursor: "pointer" }}
          src={staticAsset(ResizeIcon)}
        />
        <img
          style={{ height: 16, width: 16, cursor: "pointer", marginLeft: 16 }}
          src={staticAsset(MinimizeIcon)}
          onClick={onMinimize}
        />
      </div>
    </div>
  );
};
