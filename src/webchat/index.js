import { CustomTrigger } from "./custom-trigger";
import { CustomHeader } from "./custom-header";
import BotImage from "../assets/chatbot.svg";

export const webchat = {
  theme: {
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      width: 480,
      height: 610,
      margin: "auto",
      backgroundColor: "#FFF",
      borderRadius: 4,
      boxShadow: "0 0 50px #C1CED7",
      overflow: "hidden",
      fontFamily: "Open Sans",
      lineHeight: 1.3,
    },

    message: {
      bot: {
        image: BotImage,
        style: {
          color: "#333333",
          background: "#F1FAFD",
          fontSize: 14,
          fontFamily: "Open Sans",
          borderRadius: "0px 8px 8px 8px",
        },
        blobTickStyle: {
          display: "none",
        },
      },

      user: {
        style: {
          color: "#333333",
          background: "#DFE7EE",
          fontSize: 14,
          fontFamily: "Open Sans",
          borderRadius: "8px 0px 8px 8px",
        },
        blobTickStyle: {
          display: "none",
        },
      },
    },

    customTrigger: CustomTrigger,
    customHeader: CustomHeader,
  },
  enableUserInput: false,
};
