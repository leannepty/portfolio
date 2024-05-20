import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    200: "#E1EFDA",
    300: "#CCE4C0",
    400: "#AAC69B",
    500: "#7BA465",
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;