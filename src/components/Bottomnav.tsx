import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

function BottomNav() {
  return (
    <div className="btm-nav fixed bottom-0 left-0 right-0 flex justify-around bg-transparent transition-all duration-300 ease-in-out hover:bg-gray-800/50">
      <div className='flex-[1] flex items-center justify-center'/>
      <div className='flex-[2] flex items-center justify-center'>
        <div className="flex flex-row gap-x-40">
          <a 
            href="mailto:animeshshukla00156@gmail.com" 
            rel="noopener noreferrer" 
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaEnvelope className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/animesh-shukla-356934231/" 
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/DarkNinja15/" 
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a 
            href="https://x.com/animesh30173340" 
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
          <a 
            href="https://www.instagram.com/animesh_shukla1/" 
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div className='flex-[1] flex items-center justify-center'/>
    </div>
  );
}

export default BottomNav;