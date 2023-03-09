import React from "react";
import { Text, Reply } from "@botonic/react";

const FindApartment = () => {
  return (
    <>
      <Text>
        What kind of layout you are looking for?
        <Reply payload="bedroom_1">1 Bedroom</Reply>
        <Reply payload="bedroom_2">2 Bedrooms</Reply>
      </Text>
    </>
  );
};

export default FindApartment;
