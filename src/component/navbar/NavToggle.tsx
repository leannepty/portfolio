import React from "react"
import { Box } from "@chakra-ui/react"
import { CloseIcon } from "@/icons/CloseIcon"
import { MenuIcon } from "@/icons/MenuIcon"

interface Props { toggle: () => void, isOpen: boolean }

export const NavToggle = ({ toggle, isOpen }: Props) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	)
}
