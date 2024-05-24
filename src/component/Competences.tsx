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
          <Tag  mb={5}>
            {theme.theme}
          </Tag>
          <Wrap>
            {theme.content.map((skill) => (
              <Card key={skill.nom} m={2} variant={"outline"}>
                <CardBody>
                  <Flex direction={"column"} alignItems={"center"}>
                    <Text>{skill.nom}</Text>
                    {skill.logo}
                  </Flex>
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