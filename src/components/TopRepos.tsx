import RepoModal from "./Repo_modal";

function TopRepos(){
  return <>
     <h1 className="text-4xl pt-6 pb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Top Repositories</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RepoModal 
        projectName="Proxy Server" 
        desc="Intermediates between clients and servers, handling multiple requests concurrently via multithreading and caching for high performance and reliability."
        stars={4}
        forks={0}
        language="Java"
        color="bg-orange-500"
        url="https://github.com/DarkNinja15/Proxy-Server-Multithreaded-/"
        />
        <RepoModal
        projectName="TTR-Backend"
        desc="Backend built in rust for the website which contains insights on interview experience. Visit the website @trustherole.in"
        stars={1}
        forks={0}
        language="Rust"
        color="bg-orange-100"
        url="https://github.com/TrustTheRole/TTR-Backend"
        />
        <RepoModal
        projectName="DNS Server"
        desc="A DNS Server with raw implementation of DNS Packets written in typescript to get DNS records (supports only ipv4 as of now) of different websites."
        stars={1}
        forks={0}
        language="Typescript"
        color="bg-blue-500"
        url="https://github.com/DarkNinja15/DNS-Server"
        />
        <RepoModal
        projectName="Github Scrapper"
        desc="A github scrapper that scrapes and then caches a users github profile and evaluates useful information such as user's used language percentage."
        stars={1}
        forks={0}
        language="Javascript"
        color="bg-yellow-500"
        url="https://github.com/DarkNinja15/Github-Scrapper"
        />
        <RepoModal
        projectName="Neo"
        desc="A compiler for the language neo written in c++. Compiles the .neo file to assembly and executes it."
        stars={19}
        forks={0}
        language="C++"
        color="bg-pink-500"
        url="https://github.com/DarkNinja15/Neo/"
        />
        <RepoModal
        projectName="Clinic Management System"
        desc="A fully functional clinic management system built with flutter & firebase used in the real world for booking appointments online."
        stars={2}
        forks={1}
        language="Dart"
        color="bg-blue-800"
        url="https://github.com/DarkNinja15/project-clinc_system-"
        />
     </div>
  </>;
}

export default TopRepos;
