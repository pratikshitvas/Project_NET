import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Route,Routes} from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signUp" element={<Signup />}/> 
      <Route path="/account" element={<Account />}/> 
    </Routes>
    </AuthContextProvider>
    </>
    
    
  );
}

export default App;
