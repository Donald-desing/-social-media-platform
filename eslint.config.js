import reactApp from 'eslint-config-react-app'; // Import the react-app config
import airbnb from 'eslint-config-airbnb'; // Import the airbnb config

export default [
  {
    ...airbnb, // Extend the airbnb config
    ...reactApp, // Extend the react-app config
    files: ["src/**/*.js", "src/**/*.jsx"], // Specify the files to lint (important!)
    rules: {
      semi: "error", // Your existing rules
      "prefer-const": "error",
      // Add or override any rules here
    },
  },
];
