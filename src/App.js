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
import Product from "./Pages/product/Product";
function App() {
  return ( 
    <BrowserRouter>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:productid" element={<Product />} />
      </Routes>
      </div>
    </BrowserRouter>  
  ); 
}

export default App;
