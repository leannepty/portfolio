import { ArrowIcon } from "@/icons/ArrowIcon"
import { Card, CardBody, Flex, Heading, Text, Image, Box } from "@chakra-ui/react"
import Link from "next/link"
import { Technologies } from "./Technologies"

const experiences: { logo: React.JSX.Element, description: string, nom: string, date: string, techno: string[] }[] = [
  {
    logo: <Image src={"img/logo-jvs.png"} alt="logo jvs-Mairistem" w={150} />,
    nom: "Stage développement web frontend JVS-Mairistem",
    date: "11/04/2023 - 30/06/2023",
    description: "Durant ce stage de 12 semaine, j'ai été intégrée à l'équipe finance de JVS-Mairistem pour participer à la refonte d'un site web de comptabilité destiné aux communes.",
    techno: [
      "React",
      "Semantic UI React",
      "Redux",
      "PostgreSQL",
      "Gitlab",
      "Jira",
      "Méthode SCRUM",
    ]
  },
  {
    logo: <Image src={"img/logo-jvs.png"} alt="logo jvs-Mairistem" w={150} />,
    nom: "Alternance développement web fullstack JVS-Mairistem",
    date: "01/09/2023 - 30/06/2024",
    description: "Durant mon alternnace, je participe au sein d'une équipe au développement d'un nouveau logiciel de location de lieux publics.",
    techno: [
      "Next JS",
      "React",
      "Chakra UI",
      "Redux",
      "Prisma",
      "Mikro ORM",
      "Nest JS",
      "PostgreSQL",
      "Gitlab",
      "Jira",
      "Méthode SCRUM",
      "UX-UI"
    ]
  }
]

export const Experiences = () => (
  <Flex gap={8} h={"100vh"} direction={"column"} alignItems={"center"} justifyContent={"center"} id="experiences">
    <Heading m={3}>Mes Expérience</Heading>
    <Flex gap={5}>
      {experiences.map((exp) => (
        <Card key={exp.nom} variant={'outline'}>
          <CardBody>
            <Flex m={7}>
              {exp.logo}
              <Box>
                <Heading size={"md"}>{exp.nom}</Heading>
                <Text color='grey' mt={1}>{exp.date}</Text>
              </Box>
            </Flex>
            <Text>{exp.description}</Text>
            <Technologies technologies={exp.techno} prefixKey={"exp"} />

          </CardBody>

        </Card>
      ))}
    </Flex>
    <Link href={'#competences'}>
      <ArrowIcon />
    </Link>
  </Flex>
)