import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';
import LandingPage from './pages/Home/components/PageComponents/LandingPage';
import LoginPage from './pages/Home/components/PageComponents/LoginPage' ;
import RegisterPage from './pages/Home/components/PageComponents/RegisterPage' ;
import ForgetPasswordPage from './pages/Home/components/PageComponents/ForgetPasswordPage';
import HomePage from './pages/Home/components/PageComponents/HomePage';
function App() {
  return (
    <>
     <Header/>
      <main>
        <Routes>
        <Route path="/" element ={ <LoginPage/> } />
        <Route path="/register" element ={ <RegisterPage/>} />
         <Route path="/forget-password" element={<ForgetPasswordPage/>} />
         <Route path="/home" element ={<HomePage/>} />
         {/* <Header/> */}
          <Route path="/realhome" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;