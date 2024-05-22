"use client"

import { Card, CardBody, CardHeader, Flex, Heading, Link, Stack, Tag, Text } from "@chakra-ui/react"
import { projets } from "./constants"
import { Technologies } from "../Technologies"
import { GitHub } from "../logo/GitHub"
import { Carousel } from "../Carousel"

export const Projets = () => (
  <Flex height="100vh" alignItems={"center"} justifyContent={"center"} direction={"column"} id='projets'>
    <Heading mb={12}>
      Mes projets
    </Heading>
    <Flex>
      {
        projets.map((projet) =>
          (
            <Card key={projet.name} variant={"outline"} borderRadius={12} maxW={"1000px"}>
              <CardHeader bg={'primary.500'} borderTopRadius={12}>
                <Heading size={"md"} color={'white'}>{projet.name}</Heading>
              </CardHeader>
              <CardBody>
                <Flex gap={10}>
                  <Carousel images={projet.images}></Carousel>
                  <Stack>
                    <Text color={'grey'}>
                    Date: {projet.date}
                    </Text>

                    <Text color={'grey'}>
                    Durée aproximative: {projet.duree}
                    </Text>

                    {projet.equipe ? (<Text color={'grey'}>
                    Travail en équipe de [projet.equipe]
                    </Text>) : (<Text color={'grey'}>Travail individuel</Text>)}

                    <Text>
                      {projet.description}
                    </Text>

                    <Technologies technologies={projet.technologies} prefixKey="proj" />
                    {projet.githubUrl && (<Link href={projet.githubUrl}><GitHub /></Link>)}
                    {projet.url && (<Link href={projet.url}>Accéder au site</Link>)}
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          ))
      }
    </Flex>
    <Link href="#haut">
      <Tag m={20} variant='solid'>Revenir en haut de page</Tag>
    </Link>
  </Flex>
)