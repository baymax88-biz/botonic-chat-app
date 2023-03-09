import React from "react";
import { staticAsset } from "@botonic/react";

import NormalTriggerImage from "../assets/trigger-normal.svg";
import HoveredTriggerImage from "../assets/trigger-hovered.svg";

export const CustomTrigger = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ position: "fixed", bottom: 16, right: 16 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        style={{ height: 80, width: 80, cursor: "pointer" }}
        src={
          isHovered
            ? staticAsset(HoveredTriggerImage)
            : staticAsset(NormalTriggerImage)
        }
      />
    </div>
  );
};
