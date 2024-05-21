import { Text } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
  children: string | JSX.Element,
  to?: string,
}

export const NavItem = ({ children, to = "/"}: Props) => (
  <Link href={to}>
    <Text >
      {children}
    </Text>
  </Link>
)
