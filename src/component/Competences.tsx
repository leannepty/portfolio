import { Card, CardBody, Flex, Heading, Tag, Text, Wrap } from "@chakra-ui/react"
import React from "react"
import { skills } from "./constants"
import { ArrowIcon } from "@/icons/ArrowIcon"
import Link from "next/link"

export const Competences = () => (
  <Flex gap={8} direction={"column"} alignItems={"center"} id="competences">
    <Heading>
      Mes compétences
    </Heading>
    {
      skills.map((theme) => (
        <Flex key={theme.theme} direction={"column"} alignItems={'center'}>

          <Tag size='lg' variant='solid' colorScheme='primary' mb={5} w={'fit-content'}>
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

        </Flex>
      ))}
    <Link href="#projets">
      <ArrowIcon />
    </Link>
  </Flex>
)