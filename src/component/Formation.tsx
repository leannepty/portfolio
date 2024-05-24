import { ArrowIcon } from "@/icons/ArrowIcon"
import { Box, Flex, Heading, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react"
import Link from "next/link"

const steps = [
  { title: "Baccalauréat génral | 2018-2021", description: "Admis mention bien. Spécialité Numérique et Sciences Informatiques et Langue et Littérature, langue étrangère anglais. C'est à travers ma spécialité informatique que j'ai été séduite par ce domaine ; j'y ai notamment appris les bases du développement avec de l'algorithmie en Python et du développement de sites web vitrines en HTML et CSS." },
  { title: 'BUT Informatique 1ère année | 2021-2022', description: "Durant cette année j'ai approfondis mes compétences en dévelopement et découvert de nouvelles tels que le réseau, la programation Orientée Objet ou encore la conception et la gestion de base de donnée." },
  { title: 'BUT Informatique 2ème année | 2022-2023 ', description: "J'ai fait le choix d'étudier au sein de la spécialité Data, j'ai eu l'ocasion d'y approfondir mon usage de python ainsi que de réaliser diverses analyse de données à travers des graphiques ou visualisations powerBI tout en continuant le développement dans les matières du tronc commun. J'y ai découvert l'usage de divers frameworks et réalisé des projets plus complexes." },
  { title: 'BUT Informatique 3ème année | 2023-2024', description: "Cette année est réalisée en alternance, ayant plus d'apétences pour le développement, j'ai entrepris un changement de parcours afin de rejoindre le parcours Développement. J'ai eu l'occasion de découvrir la PWA, le développement mobile ainsi que la réalisation de jeux vidéos." },
]

export const Formation = () => (
  <Flex m='6' gap={8} direction="column" h={['fit-content','100vh']} alignItems={"center"} justifyContent={"center"} id="formation">
    <Heading>
      Ma formation
    </Heading>

    <Stepper index={4} orientation='vertical' h={96} colorScheme="primary" >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box >
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    <Link href='#experiences' >
      <ArrowIcon />
    </Link>

  </Flex>
)