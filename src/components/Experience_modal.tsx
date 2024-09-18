import { Exp } from "../models/Exp";

function ExperienceModal(props: Exp){
  return <>
     <li className="border border-pink-500 rounded-lg p-10 shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="flex justify-between items-start mb-4">
           <a href={props.url} className="text-blue-500 hover:text-blue-600 flex items-center gap-2 text-lg font-semibold">{props.comapanyName}</a>
           <span className="text-sm text-gray-400">{props.timeline}</span>
        </div>
        <p className="text-gray-300">{props.role}</p>
        <ul className="space-y-2 m-4">

          {props.points.map((e) => (
              <li className="flex items-start gap-2" key={e}>
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-violet-500 flex-shrink-0"></span>
                  <p>{e}</p>
              </li>
          ))}

        </ul>
     </li>
  </>;
}

export default ExperienceModal;
