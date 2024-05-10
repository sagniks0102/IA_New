import React from "react";

const LeaderBoard = () => {
  return (
    <>
      {/* <div className="text-light">This is LeaderBoard</div> */}

      <div className="leaderBoardHeader d-flex justify-content-between align-items-center mt-2 flex-wrap">
        <div className="topicName">
          <nav class="navbar navbar-expand-lg navbar-dark text-white bg-dark">
            <div class="container">
              {/* <a class="navbar-brand" href="#"> */}
                Mathamatics 
              {/* </a> */}
              {/* <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="ms-2" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <button
                      class="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="search">
          <input type="text" placeholder="Enter Name / User Name" className="me-3 p-1 ps-2 pe-3 rounded-2 border-0" />
          <button className="p-1 px-2 text-white bg-primary border-0 rounded-2 btn-primary">Search</button>
        </div>
      </div>

      <div className="leaderboardTable">
        <table class="table table-dark">
          <thead className="tablehead border-0">
            <tr>
              <th scope="col ">RANK</th>
              <th scope="col ">NAME</th>
              <th scope="col ">TOTAL MARKS</th>
              <th scope="col ">TOTAL POINTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr className="tableuser">
              <th scope="row">2</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src="./image/user.png" className="me-3 " alt="" />Mark</td>
              <td>152</td>
              <td>1,249 </td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr> */}
            {/* <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;
