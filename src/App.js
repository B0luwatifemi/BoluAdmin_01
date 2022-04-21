import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topBar/Topbar";
import "./app.css"
function App() {
  return ( 
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <div className="others">other pages</div>
      </div>
    </div>
  ); 
}

export default App;
