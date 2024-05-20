import { CVIcon } from '@/icons/CVIcon'
import { LinkedinIcon } from '@/icons/LinkedinIcon'
import { Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

export const Infos = () => {
  return (
    <Card >
      <CardBody>
        <Flex>
          <Stack m='6' spacing='3'>
            <Heading size='lg'>Hello world !</Heading>
            <Text>
              Je m&apos;appelle  Léanne PAUTY, je suis étudiante en troisème année d&apos;informatique à l&apos;IUT de Reims.

            </Text>
            <Text>
              Ma formation ma permis d&apos;acquérir les bases de l&apos;informatique : je maîtrise notamment les langages python, Javascript, PHP, HTML, CSS et SQL avec l&apos;utilisation de Git, Oracle ainsi que divers framework backend comme frontend.

            </Text>

            <Text>
              J&apos;ai effectué ma seconde année de BUT informatique au sein du parcours Data ce qui m&apos;a permis de maîtriser davantage la gestion des données et leur exploitation en parallèle des enseignements de développement. Cependant ayant plus d&apos;appétence pour le développement, j&apos;ai effectué les démarches afin de rejoindre le parcours développement pour ma 3ème année.
            </Text>
          </Stack>
          <Image
            boxSize='sm' src='img/myself.png' alt='PAUTY Léanne photographie' borderRadius={"full"} />
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap={2}>
          <LinkedinIcon />
         <CVIcon/>
        </Flex>
      </CardFooter>
    </Card>
  )
}