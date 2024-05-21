import { Box, Card, CardBody, Flex, Heading, Stack, Tag, Text, Wrap } from "@chakra-ui/react"
import React from "react"

//TODO: colorscheme + constant file + logos

const skills: { theme: string, content: { nom: string, logo: React.JSX.Element }[] }[] = [
	{
		theme: 'Langages', content: [
			{ nom: 'Typescript', logo: <Text>coucou</Text> },
			{ nom: 'Python', logo: <Text>coucou</Text> },
			{ nom: 'HTML', logo: <Text>coucou</Text> },
			{ nom: 'CSS', logo: <Text>coucou</Text> },
			{ nom: 'PHP', logo: <Text>coucou</Text> },
			{ nom: 'SQL', logo: <Text>coucou</Text> }
		]
	},
	{
		theme: 'Frameworks', content: [
			{ nom: 'React', logo: <Text>coucou</Text> },
			{ nom: 'React Native', logo: <Text>coucou</Text> },
			{ nom: 'Flask', logo: <Text>coucou</Text> },
			{ nom: 'Express JS', logo: <Text>coucou</Text> },
			{ nom: 'Next JS', logo: <Text>coucou</Text> },
			{ nom: 'Nest JS', logo: <Text>coucou</Text> },
			{ nom: 'Symfony', logo: <Text>coucou</Text> },
			{ nom: 'API Platform', logo: <Text>coucou</Text> }
		]
	},
	{
		theme: 'Applications', content: [
			{ nom: 'Gitlab', logo: <Text>coucou</Text> },
			{ nom: 'DBeaver', logo: <Text>coucou</Text> },
			{ nom: 'Github', logo: <Text>coucou</Text> },
			{ nom: 'VSCode', logo: <Text>coucou</Text> },
			{ nom: 'Figma', logo: <Text>coucou</Text> },
			{ nom: 'Jira', logo: <Text>coucou</Text> },
			{ nom: 'PowerBI', logo: <Text>coucou</Text> },
			{ nom: 'Packet Tracer', logo: <Text>coucou</Text> },
			{ nom: 'PHPMyAdmin', logo: <Text>coucou</Text> }
		]
	},
	{
		theme: "Système d'exploitation", content: [
			{ nom: 'Windows', logo: <Text>coucou</Text> },
			{ nom: 'Debian', logo: <Text>coucou</Text> },
			{ nom: 'Ubuntu', logo: <Text>coucou</Text> },
			{ nom: 'RasberryPi', logo: <Text>coucou</Text> },
		]
	},
	{
		theme: "Autres", content: [
			{ nom: 'Docker', logo: <Text>coucou</Text> },
			{ nom: 'Apache', logo: <Text>coucou</Text> }
		]
	}

]

export const Competences = () => {
	return (
		<Stack m='6' spacing={8}>
			<Heading size={'lg'}>
				Mes compétences
			</Heading>
			{
				skills.map((theme) => {
					return (
						<Box key={theme.theme}>

							<Tag size={"lg"} variant='solid' colorScheme='teal' mb={5}>
								{theme.theme}
							</Tag>
							<Wrap>
								{theme.content.map((skill) => {
									return (
										<Card key={skill.nom} >
											<CardBody>
												<Text>{skill.nom}</Text>
												{skill.logo}
											</CardBody>
										</Card>
									)
								})}
							</Wrap>

						</Box>
					)
				})}
		</Stack>
	)
}