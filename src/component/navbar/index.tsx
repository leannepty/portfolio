import { useState } from "react";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavToggle } from "./NavToggle";
import { NavBarContainer } from "./NavbarContainer";
import { Box } from "@chakra-ui/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  //TODO: update responsive 
  return (
    <Box bg={"primary.500"} id="haut">
      <NavBarContainer >
        <>
          <Logo />
          <NavToggle toggle={toggle} isOpen={isOpen} />
          <NavLinks isOpen={isOpen} />
        </>
      </NavBarContainer>
    </Box>
  );
};
