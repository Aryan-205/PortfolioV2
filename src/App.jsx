import About from './components/About';
import ChoiseSection from './components/ChoiseSection';
import DesignSection from './components/DesignSection';
import DesignSection2 from './components/DesignSection2';
import LandingPage from './components/LandingPage';
import PreChoise from './components/PreChoise';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="w-full relative">
      <LandingPage/>
      <PreChoise/>
      {/* <ChoiseSection/> */}
      <DesignSection/>
      <DesignSection2/>
      <TechStack/>
      <About/>
      {/* <TechStack/> */}
    </div>
  )
}