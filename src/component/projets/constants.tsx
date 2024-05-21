import { Image } from "@chakra-ui/react";
import React from "react";

interface Projet {
  name: string,
  description: string,
  duree: string,
  date: string,
  technologies: string[],
  images: React.JSX.Element[],
  githubUrl?: string,
  url?: string,
  equipe?: number
}

export const projets: Projet[] = [
  {
    name: 'Portfolio',
    date: 'Mai 2024',
    duree: '10 heures',
    description: "Réalisation en autonomie d'un site web me servant de Portfolio. J'ai fait le choix d'utiliser Next JS afin de déveloper à l'aide de la librairie React avec laquelle je suis familière ainsi que dans le but d'obtenir un meilleur référencement. Le site a été déployé sur un raspberryPi.",
    technologies: ['React', 'NextJS', 'Typescript', 'Apache'],
    githubUrl: "https://github.com/leannepty/portfolio",
    images: [
      <Image src="img/exp.png" key={'experience'} alt="capture d'écran expériences"/>,
      <Image src="img/comp.png" key={'competences'} alt="capture d'écran compétences"/>
    ]
  }//TODO: better images + projets
]