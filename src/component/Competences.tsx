import { Box, Card, CardBody, Heading, Stack, Tag, Text, Wrap } from "@chakra-ui/react"
import React from "react"
import { skills } from "./constants"

//TODO: colorscheme 


export const Competences = () => (
  <Stack m='6' spacing={8}>
    <Heading size={'lg'}>
		Mes compétences
    </Heading>
    {
      skills.map((theme) => (
        <Box key={theme.theme}>

          <Tag size={"lg"} variant='solid' colorScheme='teal' mb={5}>
            {theme.theme}
          </Tag>
          <Wrap>
            {theme.content.map((skill) => (
              <Card key={skill.nom} >
                <CardBody>
                  <Text>{skill.nom}</Text>
                  {skill.logo}
                </CardBody>
              </Card>
            ))}
          </Wrap>

        </Box>
      ))}
  </Stack>
)