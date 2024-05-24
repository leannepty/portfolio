import { extendTheme } from "@chakra-ui/react";
import { tagTheme } from "./Tag";
import { stepperTheme } from "./Stepper";

const colors = {
  primary: {
    200: "#E1EFDA",
    300: "#CCE4C0",
    400: "#AAC69B",
    500: "#7BA465",
  }
};

const customTheme = extendTheme({ colors, components: { Tag: tagTheme, Stepper: stepperTheme, Text: { baseStyle: { fontSize: ['sm', 'xl'] } } } })

export default customTheme;