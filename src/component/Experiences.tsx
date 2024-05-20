import { Box, Heading, ListItem, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react"

//TODO: colorscheme

export const Experiences = () => {
	return (

		<Stack m='6' spacing={8}>
			<Heading size={'lg'}>Mon Expérience</Heading>

			<Box>
				<Tag size={"lg"} variant='solid' colorScheme='teal' mb={5}>
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
				<Tag size={"lg"} variant='solid' colorScheme='teal' mb={5}>
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
		</Stack>
	)
}