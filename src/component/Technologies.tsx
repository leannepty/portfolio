import { Tag, Wrap } from "@chakra-ui/react";

export const Technologies = ({ technologies, prefixKey }: { technologies: string[], prefixKey: string }) => (
  <Wrap mt={5}>
    {technologies.map((tech) => (
      <Tag size={"lg"} variant='solid' colorScheme='primary' w={'fit-content'} key={`${prefixKey}-${tech}`}>
        {tech}
      </Tag>
    ))}
  </Wrap>
)