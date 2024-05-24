
import { Python } from "./logo/Python"
import { HTML } from "./logo/HTML"
import { CSS } from "./logo/CSS"
import { SQL } from "./logo/SQL"
import { PHP } from "./logo/PHP"
import { Typescript } from "./logo/Typescript"
import { ReactNative } from "./logo/ReactNative"
import { ReactLogo } from "./logo/React"
import { Flask } from "./logo/Flask"
import { Express } from "./logo/Express"
import { Next } from "./logo/Next"
import { Nest } from "./logo/Nest"
import { Symfony } from "./logo/Symfony"
import { APIPlatform } from "./logo/APiPlatform"
import { Gitlab } from "./logo/Gitlab"
import { GitHub } from "./logo/GitHub"
import { VSCode } from "./logo/VSCode"
import { Figma } from "./logo/Figma"
import { Jira } from "./logo/Jira"
import { PowerBi } from "./logo/PowerBi"
import { PacketTracer } from "./logo/PacketTracer"
import { PhpMyAdmin } from "./logo/PhpMyAdmin"
import { Windows } from "./logo/Windows"
import { Debian } from "./logo/Debian"
import { Ubuntu } from "./logo/Ubuntu"
import { RasberryPi } from "./logo/RaspberryPi"
import { Docker } from "./logo/Docker"
import { Apache } from "./logo/Apache"
import { DBeaver } from "./logo/DBeaver"
import { Redux } from "./logo/Redux"

const skills: { theme: string, content: { nom: string, logo: React.JSX.Element }[] }[] = [
  {
    theme: 'Langages', content: [
      { nom: 'Typescript', logo: <Typescript /> },
      { nom: 'Python', logo: <Python /> },
      { nom: 'HTML', logo: <HTML /> },
      { nom: 'CSS', logo: <CSS /> },
      { nom: 'PHP', logo: <PHP /> },
      { nom: 'SQL', logo: <SQL /> }
    ]
  },
  {
    theme: 'Frameworks', content: [
      { nom: 'React', logo: <ReactLogo /> },
      { nom: 'React Native', logo: <ReactNative /> },
      { nom: 'Flask', logo: <Flask /> },
      { nom: 'Express JS', logo: <Express /> },
      { nom: 'Next JS', logo: <Next /> },
      { nom: 'Nest JS', logo: <Nest /> },
      { nom: 'Symfony', logo: <Symfony /> },
      { nom: 'API Platform', logo: <APIPlatform /> }
    ]
  },
  {
    theme: 'Applications', content: [
      { nom: 'Gitlab', logo: <Gitlab /> },
      { nom: 'DBeaver', logo: <DBeaver /> },
      { nom: 'Github', logo: <GitHub /> },
      { nom: 'VSCode', logo: <VSCode /> },
      { nom: 'Figma', logo: <Figma /> },
      { nom: 'Jira', logo: <Jira /> },
      { nom: 'PowerBI', logo: <PowerBi /> },
      { nom: 'Packet Tracer', logo: <PacketTracer /> },
      { nom: 'PHPMyAdmin', logo: <PhpMyAdmin /> }
    ]
  },
  {
    theme: "Système d'exploitation", content: [
      { nom: 'Windows', logo: <Windows /> },
      { nom: 'Debian', logo: <Debian /> },
      { nom: 'Ubuntu', logo: <Ubuntu /> },
      { nom: 'RasberryPi', logo: <RasberryPi /> },
    ]
  },
  {
    theme: "Autres", content: [
      { nom: 'Docker', logo: <Docker /> },
      { nom: 'Apache', logo: <Apache /> },
      { nom: 'Redux', logo: <Redux /> }
    ]
  }

]

export { skills }