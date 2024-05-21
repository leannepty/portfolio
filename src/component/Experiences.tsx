import { ArrowIcon } from "@/icons/ArrowIcon"
import { Box, Flex, Heading, ListItem, Tag, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"

export const Experiences = () => (
  <Flex gap={8} h={"100vh"} direction={"column"} alignItems={"center"} justifyContent={"center"}  id="experiences">
    <Heading>Mon Expérience</Heading>
    <Box>
      <Tag size={"lg"} variant='solid' colorScheme='primary' mb={5}>
        Stage développement web frontend chez JVS-Mairistem
      </Tag>
      <UnorderedList ml={10}>
        <ListItem>Refonte d&apos;une application web de comptabilité destinée aux communes</ListItem>
        <ListItem>Intégration à une équipe</ListItem>
        <ListItem>Utilisation de la méthode SCRUM</ListItem>
        <ListItem>Utilisation de Gitlab, réalisation de code review</ListItem>
        <ListItem>Utilisation de la librairie React et de la librairie de composant Semantic UI React</ListItem>
      </UnorderedList>
    </Box>

    <Box>
      <Tag size={"lg"} variant='solid' colorScheme='primary' mb={5}>
        Alternance développement web fullstack chez JVS-Mairistem
      </Tag>
      <UnorderedList ml={10}>
        <ListItem>Développement d&apos;une application web de location de lieux publics</ListItem>
        <ListItem>Nouveau projet</ListItem>
        <ListItem>Intégration à une équipe</ListItem>
        <ListItem>Utilisation de la méthode SCRUM</ListItem>
        <ListItem>Utilisation de Gitlab, réalisation de code review</ListItem>
        <ListItem>Utilisation du framework Next JS et de la librairie de composant Chakra UI</ListItem>
        <ListItem>Utilisation du framework Nest JS et de l&apos;ORM Mikro ORM</ListItem>
        <ListItem>Sensibilisation à l&apos;importance de l&apox;UX UI</ListItem>
      </UnorderedList>
    </Box>
    <Link href={'#competences'}>
      <ArrowIcon />
    </Link>
  </Flex>
)