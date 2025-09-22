import About from './components/About';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import LandingPage from './components/LandingPage';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="w-full relative">
      <LandingPage/>
      <About/>
      {/* <TechStack/> */}
    </div>
  )
}