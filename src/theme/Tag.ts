import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    bg: 'primary.500',
    size: 'lg',
    fontSize: 'lg',
    p: 2,
    w: 'fit-content'
  },
})

export const tagTheme = defineMultiStyleConfig({ baseStyle, defaultProps: { variant: 'solid' } })