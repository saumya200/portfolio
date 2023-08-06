// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainPage />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
