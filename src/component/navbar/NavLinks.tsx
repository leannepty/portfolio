import { Box, Stack } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

export const NavLinks = ({ isOpen }: { isOpen: boolean }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <NavItem to="/">Qui suis je ?</NavItem>
      <NavItem to="/menus">Mon Parcours</NavItem>
      <NavItem to="/infos-pratique"> Mes projets </NavItem>
    </Stack>
  </Box>
);