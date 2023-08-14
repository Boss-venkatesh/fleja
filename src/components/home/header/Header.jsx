import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="container my-2">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div className="col-lg-3 col-md-12 col-12">
                <img src="./assets/logo.png" alt="" />

                <button
                  class="navbar-toggler mr-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="col-lg-9 col-md-12 col-12">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto mr-5">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Pages
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Portfilo
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Shop
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Contact
                      </a>
                    </li>

                    <li className="icon">
                      <SearchOutlinedIcon className="HeaderIcon" />
                      <WorkIcon className="HeaderIcon" />
                      <GridViewIcon className="HeaderIcon" />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
