import About from './components/About';
import ChoiseSection from './components/ChoiseSection';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import LandingPage from './components/LandingPage';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="w-full relative">
      <LandingPage/>
      <ChoiseSection/>
      <TechStack/>
      <About/>
      {/* <TechStack/> */}
    </div>
  )
}