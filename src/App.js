import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topBar/Topbar";
import "./app.css"
import Home from "./Pages/home/Home";
function App() {
  return ( 
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Home/>
      </div>
    </div>
  ); 
}

export default App;
