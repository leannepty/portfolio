import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    bg: 'primary.500',
    size: 'lg'
  },
})

export const tagTheme = defineMultiStyleConfig({ baseStyle })