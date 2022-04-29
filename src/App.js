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
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
function App() {
  return ( 
    <BrowserRouter>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/:userid" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<User />} />
        <Route path="/products" element={<NewUser />} />
      </Routes>
      </div>
    </BrowserRouter>  
  ); 
}

export default App;
