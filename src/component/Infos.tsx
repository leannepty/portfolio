"use client"

import { ArrowIcon } from '@/icons/ArrowIcon'
import { DownloadIcon } from '@/icons/Download'
import { LinkedinIcon } from '@/icons/LinkedinIcon'
import { MailIcon } from '@/icons/Mailcon'
import { Flex, Heading, Image, Link, Stack, Tag, Text } from '@chakra-ui/react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Infos = () => {
  const [text] = useTypewriter({
    words: ['Hello world !', 'Je suis Léanne Pauty :)'],
    loop: 5
  })

  return (
    <Flex height="70vh" alignItems={"center"} direction={"column"} id='infos' mt={200}>
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
          <Flex gap={3}>
            <Link href='https://www.linkedin.com/in/l%C3%A9anne-pauty-488593227/' >
              <Tag variant='solid' mb={5} w={'fit-content'}>
                <Text m={3}>Visitez mon Linkedin</Text> <LinkedinIcon />
              </Tag>
            </Link>
            <Link
              href='/img/PAUTY_CV.pdf'
              download='PAUTY_CV'
              rel="noopener noreferrer">
              <Tag variant='solid' mb={5} w={'fit-content'}>
                <Text m={3}>Téléchargez mon CV</Text> <DownloadIcon />
              </Tag>
            </Link>
            <Link href='mailto:pautyleanne@gmail.com'>
              <Tag variant='solid' mb={5} w={'fit-content'}>
                <Text m={3}>Contactez moi par mail</Text> <MailIcon />
              </Tag>
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