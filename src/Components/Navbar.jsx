function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="row w-100 align-items-lg-center">
              <div className="col-4">
                <a className="navbar-brand" href="#">
                  <img src="Images/45175a94d5389cc06b9d40c646878c60ac4bf7ed.png" />
                </a>
              </div>
              <div className="col-4 text-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse text-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center w-100 justify-content-center">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Location
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
                  <div className="col-4">
                         <div className="text-end">
                    <button className=" border-0 btn btn-danger">Login</button>
                  </div> 
              </div>
              
              </div>
            </div>
          
        </nav>
      </>
    );
    
}
export default Navbar;