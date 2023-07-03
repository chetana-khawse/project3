
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Blogs from './Blogs';
import Layout from './Layout';
import About from './About';
import Register from "./Register";
import { View } from "./View";
function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id/:text" element={<View />} />
          <Route path="about" element={<About />} />
        
          
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
