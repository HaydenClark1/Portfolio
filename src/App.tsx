import Homepage from './components/HomePage/Homepage'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import {Route, Routes} from "react-router-dom";


function App() {

  return <Routes>
  <Route path = '/' element = {<Homepage/>}/>
  <Route path = '/contact' element = {<Contact/>}/>
  <Route path = '/projects' element = {<Projects/>}/>
</Routes>

}

export default App
