import { addParameters, addDecorator } from "@storybook/vue";
import { withA11Y } from "@storybook/addon-a11y";

addDecorator(withA11Y);

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "grey-light", value: "#f9f9f9" },
    { name: "grey", value: "#f2f2f2" },
    { name: "black", value: "#2c2c2c" },
    { name: "beige", value: "#f8f0dd" },
    { name: "beige-dark", value: "#d0bfae" },
    { name: "blue", value: "#6fe9ff" },
    { name: "blue-dark", value: "#2a2859" },
    { name: "blue-light", value: "#b3f5ff" },
    { name: "green", value: "#43f8b6" },
    { name: "green-dark", value: "#034b45" },
    { name: "green-light", value: "#c7f6c9" },
    { name: "red", value: "#ff8274" },
    { name: "yellow", value: "#f9c66b" }
  ]
});
