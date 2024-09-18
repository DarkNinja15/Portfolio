import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Navbar(){
    return <>

        <nav className="md:space-x-5 text-center flex text-xs sm:text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">
          <div className="flex items-center">
                <img src={logo} alt="Logo" width={40} height={40} className="mr-4 brightness-0 invert"/>
          </div>
           
          <Link to="/" className="hover:scale-110 hover:text-emerald-400 hover:cursor-pointer rounded py-1 px-2">Home</Link>
          <Link to="/projects" className="hover:scale-110 hover:text-emerald-400 hover:cursor-pointer rounded py-1 px-2">Projects</Link>
          <Link to="/about" className="hover:scale-110 hover:text-emerald-400 hover:cursor-pointer rounded py-1 px-2">About</Link>

          <div className='h-1/6 w-[2rem] sm:'>
            <img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" alt="" />
          </div>
            
        </nav>
        {/* <hr className="mt-2 opacity-50"/> */}
        <div className="flex justify-center h-[1rem] w-fit">
                <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" />
            </div>
    </>
}

export default Navbar;
