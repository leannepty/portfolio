import { Text } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
  children: string | JSX.Element,
  to?: string,
  isLast?: boolean
}

export const NavItem = ({ children, to = "/", isLast = false }: Props) => {
  return (
    <Link href={to}>
      <Text >
        {children}
      </Text>
    </Link>
  )
}
