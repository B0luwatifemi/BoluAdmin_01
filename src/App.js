import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topBar/Topbar";
import "./app.css";
import Home from "./Pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
function App() {
  return ( 
    <BrowserRouter>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/:userId" element={<User />} />
      </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
