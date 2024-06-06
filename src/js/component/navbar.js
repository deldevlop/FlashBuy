import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <span className="span-logo">
            <a className="navbar-brand" href="#">
              FLASH<span className="sale">SALE</span>
            </a>
          </span>

          <div className="search-input">
            <form
              action=""
              className="p-2 d-flex align-items-center justify-content-center"
              role="search"
            >
              <span className="search-icon ms-2">
                <i className="ri-search-2-line"></i>
              </span>
              <input className="ms-2" type="text" placeholder="search...." />
            </form>
          </div>

          <div className="icon-group d-flex justify-content-center align-items-center">
            {user ? (
              <button onClick={logout} className="btn btn-link">
                <i class="bi bi-box-arrow-left"></i>
              </button>
            ) : (
              <>
                <i
                  className="bi bi-person-circle me-4 btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                ></i>
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        ></h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <Login />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <i className="bi bi-bag-check me-4"></i>
          </div>
        </div>
      </nav>

      <div className="subHeader d-flex justify-content-evenly">
        <span className="dropItem">
          <a
            className="nav-link dropdown-toggle fs-capitalize"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Men
          </a>
          <ul className="dropdown-menu border border-0">
            <li>
              <NavLink className="dropdown-item" to="/ShoesMen">
                Shoes
              </NavLink>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                T-SHIRT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PANT
              </a>
            </li>
          </ul>
        </span>

        <span className="dropItem">
          <a
            className="nav-link dropdown-toggle fs-capitalize"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Women
          </a>
          <ul className="dropdown-menu border border-0">
            <li>
              <a className="dropdown-item" href="#">
                SHOES
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                T-SHIRT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PANT
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                SKIRT
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                DRESS
              </a>
            </li>
          </ul>
        </span>

        <span className="dropItem">
          <a
            className="nav-link dropdown-toggle fs-capitalize"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Accessories
          </a>
          <ul className="dropdown-menu border border-0">
            <li>
              <a className="dropdown-item" href="#">
                JEWELLERY
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                HANDBAGS
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                WATCHES
              </a>
            </li>
          </ul>
        </span>

        <span className="dropItem">
          <a
            className="nav-link dropdown-toggle fs-capitalize"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Kids
          </a>
          <ul className="dropdown-menu border border-0">
            <li>
              <a className="dropdown-item" href="#">
                SHOES
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                T-SHIRT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PANT
              </a>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Header;
