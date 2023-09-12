import logo from './logo.svg';
import './App.css';
import AboutSection from './components/home/AboutSection';
import HowItWorks from './components/home/HowItWorks';
import Testimonial from './components/home/Testimonial';
import Heropage from './components/home/Heropage';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <div className="App">

      <main>
        <Navbar />
        <Heropage />
        <AboutSection />
        <HowItWorks />
        <Testimonial />
      </main>
    </div>
  );
}

export default App;
