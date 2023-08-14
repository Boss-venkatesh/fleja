
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/home/header/Header';
import Home from './components/home/home/Home';
import Brand from './components/home/Branding/Brand';
import About from './components/home/about/About';
import Service from './components/home/services/Service';
import Look from './components/home/looking/Look';
import Skills from './components/home/skills/Skills';
import Wrapper1 from './components/home/Wrapper/Wrapper1';
import Gallery from './components/home/Gallery/Gallery';
import Blog from './components/home/blog/Blog';
import Footer from './components/home/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Brand/>
      <About/>
      <Service/>
      <Look/>
      <Skills/>
      <Wrapper1/>
      <Gallery/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
