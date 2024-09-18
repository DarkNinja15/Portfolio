import ProjectModal from "./Project_modal";

function Projects(){
  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
    <ProjectModal
        projectName="Proxy Server" 
        desc="Multithreaded Proxy server made with Java. It supports TCP & HTTP main servers to act as a proxy between client & main server."
        stars={4}
        forks={0}
        language="Java"
        color="bg-orange-500"
        url="https://github.com/DarkNinja15/Proxy-Server-Multithreaded-/"

    />
    <ProjectModal
        projectName="Sync Sphere" 
        desc="Flutter package designed to check internet connectivity throughout the app or just on a particular location in an easy way."
        stars={4}
        forks={0}
        language="Dart"
        color="bg-blue-500"
        url="https://pub.dev/packages/sync_sphere"
    />
    <ProjectModal
        projectName="Chess Backend" 
        desc="Backend of a realtime chess app developed using websockets and chess.js library for move validation."
        stars={4}
        forks={0}
        language="Typescript"
        color="bg-blue-700"
        url="https://github.com/DarkNinja15/chess-backend"
    />
    <ProjectModal
        projectName="DNS Server" 
        desc="DNS Server with raw implementation of DNS packets to retrieve dns records for various websites."
        stars={4}
        forks={0}
        language="Typescript"
        color="bg-blue-700"
        url="https://github.com/DarkNinja15/chess-backend"
    />
    </div>

    <div className="flex justify-between h-1/4">
      <img src="https://github.com/DarkNinja15/flappy-bird/blob/main/fire-unscreen.gif?raw=true" alt="Animated GIF" className="pt-6" />
      <img src="https://github.com/DarkNinja15/flappy-bird/blob/main/fire-unscreen.gif?raw=true" alt="Animated GIF" className="pt-6" />
      <img src="https://github.com/DarkNinja15/flappy-bird/blob/main/fire-unscreen.gif?raw=true" alt="Animated GIF" className="pt-6" />
    </div>
  </>;
}

export default Projects;
