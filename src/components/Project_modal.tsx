import { Proj } from "../models/Proj";

function ProjectModal(props: Proj) {
  return (
    <div className="cursor-pointer shadow-lg transition-transform duration-300 ease-in-out rounded-md hover:scale-105 w-63 m-2" style={{ boxShadow: '-4px 0px 6px -1px rgb(217, 70, 239), 0px 4px 4px -1px rgb(217, 70, 239)' }}>
      <a href={props.url}>
        <div className="flex flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">{props.projectName}</span>
          </div>
          <div className="text-white overflow-hidden font-sans">
          {props.desc}
          </div>
          <div className="mt-1 flex flex-wrap">
            <div className="m-1 flex items-center">
              <span className={`rounded-xl m-1 ${props.color} relative inline-block w-4 h-4 border border-[rgba(0,0,0,0.1)]`}></span>
              {props.language}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectModal;

