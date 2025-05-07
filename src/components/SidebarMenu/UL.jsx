import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UL = ({ handleTogglle }) => {
  const location = useLocation(); // Get current URL path
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  // Sync active menu and submenu with the current URL
  useEffect(() => {
    const path = location.pathname;
    // Define menu mappings based on paths
    const menuMappings = {
      "/": "dashboard",

      // home
      "/home-slider": "home",
      "/home-slider-add": "home",
      "/home-slider-edit": "home",
      "/home-hero": "home",
      "/home-about": "home",
      "/home-service": "home",
      "/home-service-add": "home",
      "/home-service-edit": "home",

      // about
      "/about-us": "about",
      "/more-about": "about",

      // product
      "/product-category": "product",
      "/product-category-add": "product",
      "/product-category-edit": "product",
      "/product": "product",
      "/product-add": "product",
      "/product-edit": "product",

      // service
      "/service": "service",
      "/service-add": "service",
      "/service-edit": "service",

      // gallery
      "/gallery": "gallery",
      "/gallery-add": "gallery",
      "/gallery-edit": "gallery",

      // client
      "/client": "client",
      "/client-add": "client",
      "/client-edit": "client",

      // contact
      "/contact": "contact",

      // setting
      "/setting": "setting",

      // user
      "/user": "user",
      "/user-add": "user",
      "/user-edit": "user",

      // authentication
      "/profile": "profile",
      "/change-password": "change-password",
    };

    // Define submenu mappings based on paths
    const subMenuMappings = {
      "/": "",

      // home
      "/home-slider": "home-slider",
      "/home-slider-add": "home-slider-add",
      "/home-slider-edit": "home-slider-edit",
      "/home-hero": "home-hero",
      "/home-about": "home-about",
      "/home-service": "home-service",
      "/home-service-add": "home-service-add",
      "/home-service-edit": "home-service-edit",

      // about
      "/about-us": "about-us",
      "/more-about": "more-about",

      // product
      "/product-category": "product-category",
      "/product-category-add": "product-category-add",
      "/product-category-edit": "product-category-edit",
      "/product": "product",
      "/product-add": "product-add",
      "/product-edit": "product-edit",

      // service
      "/service": "service",
      "/service-add": "service-add",
      "/service-edit": "service-edit",

      // gallery
      "/gallery": "gallery",
      "/gallery-add": "gallery-add",
      "/gallery-edit": "gallery-edit",

      // client
      "/client": "client",
      "/client-add": "client-add",
      "/client-edit": "client-edit",

      // contact
      "/contact": "contact",

      // setting
      "/setting": "setting",

      // user
      "/user": "user",
      "/user-add": "user-add",
      "/user-edit": "user-edit",

      // authentication
      "/profile": "profile",
      "/change-password": "change-password",
    };

    // Update active menu and active submenu based on the URL path
    if (path.startsWith("/home-slider-add")) {
      setActiveMenu("home");
      setActiveSubMenu("home-slider");
    } else if (path.startsWith("/home-slider-edit")) {
      setActiveMenu("home");
      setActiveSubMenu("home-slider");
    } else if (path.startsWith("/home-service-add")) {
      setActiveMenu("home");
      setActiveSubMenu("home-service");
    } else if (path.startsWith("/home-service-edit")) {
      setActiveMenu("home");
      setActiveSubMenu("home-service");
    } else if (path.startsWith("/product-category-add")) {
      setActiveMenu("product");
      setActiveSubMenu("product-category");
    } else if (path.startsWith("/product-category-edit")) {
      setActiveMenu("product");
      setActiveSubMenu("product-category");
    } else if (path.startsWith("/product-add")) {
      setActiveMenu("product");
      setActiveSubMenu("product");
    } else if (path.startsWith("/product-edit")) {
      setActiveMenu("product");
      setActiveSubMenu("product");
    } else if (path.startsWith("/service-add")) {
      setActiveMenu("service");
      setActiveSubMenu("service");
    } else if (path.startsWith("/service-edit")) {
      setActiveMenu("service");
      setActiveSubMenu("service");
    } else if (path.startsWith("/gallery-add")) {
      setActiveMenu("gallery");
      setActiveSubMenu("gallery");
    } else if (path.startsWith("/gallery-edit")) {
      setActiveMenu("gallery");
      setActiveSubMenu("gallery");
    } else if (path.startsWith("/client-add")) {
      setActiveMenu("client");
      setActiveSubMenu("client");
    } else if (path.startsWith("/client-edit")) {
      setActiveMenu("client");
      setActiveSubMenu("client");
    } else if (path.startsWith("/user-add")) {
      setActiveMenu("user");
      setActiveSubMenu("user");
    } else if (path.startsWith("/user-edit")) {
      setActiveMenu("user");
      setActiveSubMenu("user");
    } else {
      setActiveMenu(menuMappings[path] || "");
      setActiveSubMenu(subMenuMappings[path] || "");
    }
  }, [location.pathname]);

  // Handle submenu toggle (open/close)
  const handleSubMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  return (
    <>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Dashboard </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "home" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("home")}
            to="#sidebarHome"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarHome"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:home-2-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Home </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "home" ? "show" : ""}`}
            id="sidebarHome"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "home-slider" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/home-slider"
                >
                  Slider
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "home-hero" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/home-hero"
                >
                  Hero
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "home-about" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/home-about"
                >
                  About
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "home-service" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/home-service"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "about" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("about")}
            to="#sidebarAbout"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAbout"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:info-square-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> About </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "about" ? "show" : ""}`}
            id="sidebarAbout"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "about-us" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "more-about" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/more-about"
                >
                  More About
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "product" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("product")}
            to="#sidebarProduct"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarProduct"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Product </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "product" ? "show" : ""}`}
            id="sidebarProduct"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-category" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/product-category"
                >
                  Product Category
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/product"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "service" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/service"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:archive-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Service </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "gallery" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/gallery"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:gallery-wide-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Gallery </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "client" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/client"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Client </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "contact" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/contact"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:phone-linear"></iconify-icon>
            </span>
            <span className="nav-text"> Contact </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "setting" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/setting"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Setting </span>
          </Link>
        </li>

        <li className="menu-title">Authentication</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "user" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/user"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> User </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "profile" ? "active" : ""}`}
            onClick={handleTogglle}
            to="/profile"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-circle-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Profile</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeMenu === "change-password" ? "active" : ""
            }`}
            onClick={handleTogglle}
            to="/change-password"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:lock-password-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Change Password </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UL;
