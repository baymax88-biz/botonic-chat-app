import Welcome from "./actions/welcome";
import FindApartment from "./actions/find_apartment";

export const routes = [
  {
    payload: "start",
    action: Welcome,
  },
  {
    payload: "find_apartment",
    action: FindApartment,
  },
];
