import BotImage from "../assets/chatbot.svg";
import { CustomTrigger } from './custom-trigger'

export const webchat = {
  theme: {
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      width: 400,
      height: 500,
      margin: "auto",
      backgroundColor: "white",
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
  },
};
