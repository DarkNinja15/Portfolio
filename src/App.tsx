import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import BottomNav from './components/Bottomnav'
import Side from './components/top_level_components/Side';
import Home from './components/top_level_components/Home';
import Navbar from './components/Navbar';
import About from './components/top_level_components/About';
import Projects from './components/Projects';

function App() {

  return (
    <Router>
      <div className='flex min-h-screen bg-slate-900'>
        <Side/>
            <div className='flex-[2] flex-col items-center justify-center pl-20 pr-20 pt-10'>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/about' element={<About/>}/>
              </Routes>

              <div className='full-container my-5'>
        <div className='overflow-hidden pb-14 hover:scale-110 transition-transform duration-300 ease-in-out'>
          <a href="https://iiitbh.ac.in/" target="_blank" className="font-semibold text-center">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Indian Institute of Information Technology, Bhagalpur</h3>
            <div className="flex space-x-2 divide-x-2 divide-gray 300 text-white items-center justify-center">
              <div className="flex space-x-2 flex-shrink-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-opacity-25">2021 - 2025</span>
              </div>
              <div className="pl-2 truncate text-opacity-20">B.Tech(CSE)</div>
            </div>
          </a>
        </div>
      </div>
 
            </div>
        <Side/>
      <BottomNav/>
      </div>
    </Router>
  )
  
  

   
}

export default App
