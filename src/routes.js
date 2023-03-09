import Welcome from "./actions/welcome";
import ChosenPizza from "./actions/chosen-pizza";
import ChosenPasta from "./actions/chosen-pasta";

export const routes = [
  {
    path: "welcome",
    text: /hi|hello/,
    action: Welcome,
    childRoutes: [
      {
        path: "chosen-pizza",
        payload: "pizza",
        action: ChosenPizza,
      },
      {
        path: "chosen-pasta",
        payload: "pasta",
        action: ChosenPasta,
      },
    ],
  },
];
