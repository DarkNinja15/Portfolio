import { Proj } from "../models/Proj";

function RepoModal(props:Proj){
  return <a href={props.url} target="_blank" rel="noopener noreferrer" className="block no-underline hover:scale-105 border-violet-500 border transition-transform duration-300 ease-in-out">
    <div className="h-full bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{props.projectName}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link text-gray-400"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <path d="M15 3h6v6"></path>
        <path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      </div>
      <p className="text-gray-300 mb-4 line-clamp-4">{props.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full mr-1 ${props.color}`}></span>
          <span className="text-sm text-gray-400">{props.language}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-400 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span className="mr-4">{props.stars}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork mr-1"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>
        <span className="mr-4">{props.forks}</span>
      </div>

    </div>
  </a>;
}

export default RepoModal;
