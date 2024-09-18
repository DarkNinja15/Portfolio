import ExperienceModal from "./Experience_modal";

function Experience(){
  return <>
            <h1 className="text-4xl pt-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Experience</h1>
            <ul className="space-y-6 pt-6">
                <ExperienceModal
                    role="Mobile App Developer Intern" timeline="May 2023 - Aug 2023" 
                    points={[
                      "Built a cross-platform Flutter application for Android, iOS, and web from scratch, reaching 1000 number of users across platforms with a unified codebase.",
                      "Refined adaptive forms efficiently, resulting in 10% reduction in form rendering time.",
                      "Developed complex animations from scratch improving user experience."
                    ]} 
                    comapanyName="Workroom Automation" url="https://drive.google.com/file/d/16EznwaEtXEC-4IZPFpJ1mJ-Y9nJ1OnYh/view"
                />
                
                <ExperienceModal
                    role="Fullstack Developer Intern" timeline="Jan 2024 – Apr 2024"
                    points={[
                      "Developed a modern Node.js backend application with PostgreSQL for an online testing platform, supporting 500-1000 number of concurrent users.",
                      "Implemented advanced optimizations such as caching and rate limiting, resulting in a 50% improvement in API response time and a 30% reduction in server load.",
                      "Addressed all security concerns and edge cases effectively to ensure a secure examination environment.",
                      "Built a user panel front end with Flutter for Android, incorporating complex animations and handling real-time test data with GetX.",
                      "Integrated payment functionality using Razorpay, streamlining payment processes."
                    ]}
                    comapanyName="Jorte" url=""
                />
            </ul>
  </>;
}

export default Experience;
