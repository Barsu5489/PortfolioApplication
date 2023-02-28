import Header from "./Header";
import UserHome from "./UserHome";
import Projects from "./Projects";
import Skills from "./Skills";
import Auth from "./Auth";
import { useEffect } from "react";
function App() {
useEffect(() => {
  fetch('http://localhost:3000/users')
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data)
  })
},[])

  return (
    <div className="App">
      <Header />
      <UserHome />
      <Projects />
      <Skills />
      <Auth />
     <h1>Header</h1>

    </div>
  );
}

export default App;
