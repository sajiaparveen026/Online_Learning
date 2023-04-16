import './App.css';
import {Routes,Route} from "react-router-dom"

//React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from './Pages/Home.Page';
import FreeContentPage from './Pages/FreeContent.Page';
import CoursesPage from './Pages/Courses.Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/freeContent" element={<FreeContentPage/>} />
      <Route path='/Courses' element={<CoursesPage/>}/>
    </Routes>
  );
}

export default App;
