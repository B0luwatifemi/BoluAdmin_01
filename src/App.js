import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topBar/Topbar";
import "./app.css"
import Home from "./Pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./Pages/userList/UserList";
function App() {
  return ( 
    <BrowserRouter>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
