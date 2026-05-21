import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import SellerHome from "./components/seller/SellerHome";
import AddProduct from "./components/seller/AddProduct";
import { useSelector } from "react-redux";
import CustomerHome from "./components/customer/CustomerHome";
import Cart from "./components/cart/cart";
import ProductInDetail from "./components/customer/ProductInDetail";
import Address from "./components/address/Address";
import AddAddress from "./components/address/AddAddress";
import AddressProvider from "./stores/reducer/AddressContext";
import Order from "./components/orders/Order";
import Navbarr from "./components/categoryNavbar/Navbarr";
import Category from "./components/seller/Category";
import ShowCategoryPages from "./components/categoryNavbar/ShowCategoryPages";
import Search from "./components/search_feature/Search";
import UnknownPages from "./Pages/UnkonownPages";

function App() {
  const { userType } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navbarr />
        <AddressProvider>
          <Routes>
            <Route
              path="/"
              element={
                userType === "seller" ? <SellerHome /> : <CustomerHome />
              }
            />
            <Route path="/create-product" element={<AddProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/showProduct/:id" element={<ProductInDetail />} />
            <Route path="/category" element={<Category />} />
            <Route path="/address" element={<Address />} />
            <Route path="/addAddress" element={<AddAddress />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<UnknownPages />} />
            <Route path="/:category" element={<ShowCategoryPages />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </AddressProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
