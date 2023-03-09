import React from "react";
import { Text, Reply } from "@botonic/react";

const Welcome = () => {
  return (
    <>
      <Text>
        Hey, I’m hybot. How can I help you?
        <Reply payload="find_apartment">Find an apartment</Reply>
        <Reply payload="schedule_tour">Schedule a tour</Reply>
      </Text>
    </>
  );
};

export default Welcome;
