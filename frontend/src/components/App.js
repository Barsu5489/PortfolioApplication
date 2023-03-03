import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import UserHome from "./UserHome";
import Projects from "./Projects";
import Skills from "./Skills";
import Auth from "./Auth";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
