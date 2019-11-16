import React from "react";
import "./Search.css";
import zillowLogo from "./Zillowlogo.gif";

function Search() {
  return (
    // <!-- sidebar -->
    <>
      <div className="sidebar">
        <a className="active" href="client\src\Uhflogo.png">
          
        </a>

        <a href="https://gisit.tarrantcounty.com/cmportal/">
          Check Crime in your area.
        </a>

        <a className="intPro" href="https://broadbandnow.com/Texas">
          Search for Internet Provider.
        </a>
      </div>

      <div
        id="modalPassword"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Forgot password</h3>
              <button
                type="button"
                className="close font-weight-light"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Reset your password..</p>
            </div>
            <div className="modal-footer">
              <button className="btn" data-dismiss="modal" aria-hidden="true">
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bgimg display-container animate-opacity text-white">
        <h1>Universal Home Finder</h1>
        <div id="addQuestion">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Price
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  $100K - $150K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $150K - $250K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $250K - $3500K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $350K - $450K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $450K - $550K
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Property Tax
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  Dallas County
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Tarrant County
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Denton County
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Collin County
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Rockwall County
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Property Type
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  Multi-Family
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Houses
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Condos/co-ops
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Townhomes
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Condos/co-ops
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blankHtml.html">
                  Done
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bed
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  1
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  2
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  3
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  4
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  4+
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blankHtml.html">
                  Done
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Best Buy
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  Action
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Another action
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blankHtml.html">
                  Separated link
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="topleftimg">
          <img src={zillowLogo} alt="logo" />
        </div>
        <div className="signIn">
          <li className="dropdown order-1">
            <button
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              className="btn btn-outline-secondary dropdown-toggle"
            >
              Login <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right mt-2">
              <li className="px-3 py-2">
                <form className="form">
                  <div className="form-group">
                    <input
                      id="emailInput"
                      placeholder="Email"
                      className="form-control form-control-sm"
                      type="text"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="passwordInput"
                      placeholder="Password"
                      className="form-control form-control-sm"
                      type="text"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <div className="form-group text-center">
                    <small>
                      <a
                        href="blankHtml.html"
                        data-toggle="modal"
                        data-target="#modalPassword"
                      >
                        Forgot password?
                      </a>
                    </small>
                    <small>
                      <a className="regLink" href="client\src\Reg.js">
                        Register here!
                      </a>
                    </small>
                  </div>
                </form>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
}

export default Search;