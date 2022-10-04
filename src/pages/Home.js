// import logo from '../assets/logo192.png';
import { AnimatedFade } from '../components/core/AnimatedFade';
import { AnimatedScene } from '../examples/AnimatedScene';

function Home() {
  return (
    <AnimatedFade>
      <div className="FinalScene">
        <AnimatedScene />
      </div>
    </AnimatedFade>
  );
}

export default Home;
