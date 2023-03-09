import React from "react";
import { Text, Reply } from "@botonic/react";

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Welcome to our food service!</Text>
        <Text>
          What do you want to eat today?
          <Reply payload="pizza">Pizza</Reply>
          <Reply payload="pasta">Pasta</Reply>
        </Text>
      </>
    );
  }
}
