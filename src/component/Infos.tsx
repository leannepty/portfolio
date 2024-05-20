"use client"

import { CVIcon } from '@/icons/CVIcon'
import { LinkedinIcon } from '@/icons/LinkedinIcon'
import { Box, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Infos = () => {
  const [text] = useTypewriter({
    words: ['Hello world !', 'Je suis Léanne Pauty'],
    loop: 5
  })

  return (
    <Card >
      <CardBody>
        <Flex>
          <Stack m='6' spacing={8}>
            <Heading size='lg'>{text} <Cursor /></Heading>
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
          <Link href='https://www.linkedin.com/in/l%C3%A9anne-pauty-488593227/' >
            <LinkedinIcon />
          </Link>
          <Link
            href='/img/PAUTY_CV.pdf'
            download='PAUTY_CV'
            rel="noopener noreferrer">
            <CVIcon />
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  )
}