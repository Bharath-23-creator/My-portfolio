import './App.css'
import Home from './components/Home.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Connect from './components/Connect.jsx';
import Footer from './components/Footer.jsx';
export default function App(){
  return(
    <>
    <Home/>
    <Education/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Connect/>
    <Footer/>
    </>
  )
}