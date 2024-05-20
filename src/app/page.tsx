import { Infos } from "@/component/Infos";
import { Formation } from "@/component/Formation";
import { Box } from "@chakra-ui/react";
import { Experiences } from "@/component/Experiences";
import { Competences } from "@/component/Competences";

export default function Home() {
  return (
    <Box mr={250} ml={250} mt={50}>
      <Infos/>
      <Formation/>
      <Experiences/>
      <Competences/>
    </Box>
  );
}
