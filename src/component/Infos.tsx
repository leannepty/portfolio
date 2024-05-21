"use client"

import { ArrowIcon } from '@/icons/ArrowIcon'
import { CVIcon } from '@/icons/CVIcon'
import { LinkedinIcon } from '@/icons/LinkedinIcon'
import { Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Infos = () => {
  const [text] = useTypewriter({
    words: ['Hello world !', 'Je suis Léanne Pauty :)'],
    loop: 5
  })

  return (
    <Flex height="100vh" alignItems={"center"} justifyContent={"center"} direction={"column"} id='infos'>
      <Flex>
        <Stack spacing={8}>
          <Heading>{text} <Cursor /></Heading>
          <Text>
            Passionnée par le développement logiciel, je m&apos;efforce de transformer des idées en solutions concrètes et efficaces.
          </Text>
          <Text>
            Au fil de mes études et de mes projets personnels, j&apos;ai acquis une expérience dans plusieurs langages de programmation et technologies. Je suis constamment à la recherche de nouvelles opportunités pour améliorer mes compétences et contribuer à des projets innovants.
          </Text>
          <Text>
            Parcourez mon portfolio pour découvrir mes réalisations, compétences et projets. N&apos;hésitez pas à me contacter :&#41;
          </Text>
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
        </Stack>
        <Image
          boxSize='sm' src='img/myself.png' alt='PAUTY Léanne photographie' borderRadius={"full"} />
      </Flex>
      <Link href='#formation'>
        <ArrowIcon />
      </Link>
    </Flex>

  )
}