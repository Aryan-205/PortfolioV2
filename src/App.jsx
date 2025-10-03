import About from './components/About';
import ChoiseSection from './components/ChoiseSection';
import LandingPage from './components/LandingPage';
import PreChoise from './components/PreChoise';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="w-full relative">
      <LandingPage/>
      <PreChoise/>
      <ChoiseSection/>
      <TechStack/>
      <About/>
      {/* <TechStack/> */}
    </div>
  )
}