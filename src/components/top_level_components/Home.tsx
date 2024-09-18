import Experience from "../Experience";
import Intro from "../Intro";
import TopRepos from "../TopRepos";

function Home(){
  return <>
      <div className='pt-10 pb-10'><Intro/></div>
      <div className="pb-10"><Experience/></div>
      <div className='pb-10'><TopRepos/></div>
      <div className='pt-10'></div>
  </>;
}

export default Home;
