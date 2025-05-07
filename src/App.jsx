import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";

import Dashboard from "./pages/Dashboard/Dashboard";

import SliderList from "./pages/Home/Slider/SliderList";
import AddSlider from "./pages/Home/Slider/AddSlider";
import EditSlider from "./pages/Home/Slider/EditSlider";
import Hero from "./pages/Home/Hero/Hero";
import About from "./pages/Home/About/About";
import HomeServiceList from "./pages/Home/Service/HomeServiceList";
import HomeServiceAdd from "./pages/Home/Service/HomeServiceAdd";
import HomeServiceEdit from "./pages/Home/Service/HomeServiceEdit";

import AboutUs from "./pages/About/AboutUs";
import MoreAbout from "./pages/About/MoreAbout";

import ProductCategoryList from "./pages/Product/ProductCategory/ProductCategoryList";
import ProductCategoryAdd from "./pages/Product/ProductCategory/ProductCategoryAdd";
import ProductCategoryEdit from "./pages/Product/ProductCategory/ProductCategoryEdit";
import ProductList from "./pages/Product/Product/ProductList";
import ProductAdd from "./pages/Product/Product/ProductAdd";
import ProductEdit from "./pages/Product/Product/ProductEdit";

import ServiceList from "./pages/Service/ServiceList";
import ServiceAdd from "./pages/Service/ServiceAdd";
import ServiceEdit from "./pages/Service/ServiceEdit";

import GalleryList from "./pages/Gallery/GalleryList";
import GalleryAdd from "./pages/Gallery/GalleryAdd";
import GalleryEdit from "./pages/Gallery/GalleryEdit";

import ClientList from "./pages/Client/ClientList";
import ClientAdd from "./pages/Client/ClientAdd";
import ClientEdit from "./pages/Client/ClientEdit";

import Settings from "./pages/Settings/Settings";
import Contact from "./pages/Contact/Contact";

import UserList from "./pages/User/UserList";
import UserAdd from "./pages/User/UserAdd";
import UserEdit from "./pages/User/UserEdit";

import Profile from "./pages/Authentication/Profile";
import ChangePassword from "./pages/Authentication/ChangePassword";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const htmlElement = document.documentElement;
      const currentSize = htmlElement.getAttribute("data-menu-size");

      if (window.innerWidth <= 1140) {
        if (currentSize !== "hidden") {
          htmlElement.setAttribute("data-menu-size", "hidden");
        }
      } else {
        htmlElement.setAttribute("data-menu-size", "sm-hover-active");
      }
    };

    // Run once when mounted
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  // Handle toggle logic
  const handleToggle = () => {
    const dataMenuSize = htmlElement.getAttribute("data-menu-size");

    // Only execute the toggle logic if datamenusize is "hidden"
    if (dataMenuSize === "hidden") {
      if (isSidebarEnabled) {
        htmlElement.classList.remove("sidebar-enable");
        bodyElement.style.overflow = ""; // Reset overflow
      } else {
        htmlElement.classList.add("sidebar-enable");
        bodyElement.style.overflow = "hidden"; // Hide overflow
      }

      setIsSidebarEnabled(!isSidebarEnabled); // Toggle sidebar state
    }
  };

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="wrapper">
            <Header handleTogglle={handleToggle} />
            <SidebarMenu handleTogglle={handleToggle} />

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>

              <Route path="/home-slider" element={<SliderList />}></Route>
              <Route path="/home-slider-add" element={<AddSlider />}></Route>
              <Route path="/home-slider-edit" element={<EditSlider />}></Route>
              <Route path="/home-hero" element={<Hero />}></Route>
              <Route path="/home-about" element={<About />}></Route>
              <Route path="/home-service" element={<HomeServiceList />}></Route>
              <Route
                path="/home-service-add"
                element={<HomeServiceAdd />}
              ></Route>
              <Route
                path="/home-service-edit"
                element={<HomeServiceEdit />}
              ></Route>

              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/more-about" element={<MoreAbout />}></Route>

              <Route
                path="/product-category"
                element={<ProductCategoryList />}
              ></Route>
              <Route
                path="/product-category-add"
                element={<ProductCategoryAdd />}
              ></Route>
              <Route
                path="/product-category-edit"
                element={<ProductCategoryEdit />}
              ></Route>
              <Route path="/product" element={<ProductList />}></Route>
              <Route path="/product-add" element={<ProductAdd />}></Route>
              <Route path="/product-edit" element={<ProductEdit />}></Route>

              <Route path="/service" element={<ServiceList />}></Route>
              <Route path="/service-add" element={<ServiceAdd />}></Route>
              <Route path="/service-edit" element={<ServiceEdit />}></Route>

              <Route path="/gallery" element={<GalleryList />}></Route>
              <Route path="/gallery-add" element={<GalleryAdd />}></Route>
              <Route path="/gallery-edit" element={<GalleryEdit />}></Route>

              <Route path="/client" element={<ClientList />}></Route>
              <Route path="/client-add" element={<ClientAdd />}></Route>
              <Route path="/client-edit" element={<ClientEdit />}></Route>

              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/setting" element={<Settings />}></Route>

              <Route path="/user" element={<UserList />}></Route>
              <Route path="/user-add" element={<UserAdd />}></Route>
              <Route path="/user-edit" element={<UserEdit />}></Route>

              <Route path="/profile" element={<Profile />}></Route>
              <Route
                path="/change-password"
                element={<ChangePassword />}
              ></Route>

              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/reset-password" element={<ResetPassword />}></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
