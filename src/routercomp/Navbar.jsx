import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState(1);

  const activeTab = (id) => {
    setActive(id);
  }
  return (
    <>
      {/* <nav className='navbar text-white mx-5 ' >
        <Link to='/' onClick={() => activeTab(1)} className={active === 1 ? 'tab' : 'nav-link'}>HOME </Link>
        <Link to='/quizeme' onClick={() => activeTab(2)} className={active === 2 ? 'tab' : 'nav-link'}>QUIZ ME <span className='line'></span></Link>
        <Link to='/myjarvis' onClick={() => activeTab(3)} className={active === 3 ? 'tab' : 'nav-link'}>MY JARVIS</Link>
        <Link to='/studymaterial' onClick={() => activeTab(4)} className={active === 4 ? 'tab' : 'nav-link'}>STUDY MATERIAL</Link>
        <Link to='/leaderboard' onClick={() => activeTab(5)} className={active === 5 ? 'tab' : 'nav-link'}>LEADERBOARD</Link>
        <Link to='/abcd' className='nav-link' > <span className='line'></span>
          <li className="nav-item dropdown  list-unstyled">
            <a className="nav-link dropdown-toggle col coustomusertxt" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-user p-2 rounded-circle coustomuserbg me-2 text-black"></i>
              Abcd
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </Link>
        <br />
      </nav> */}
      <nav className='navbar text-white navbar-expand-lg' >
      <div class=" navbordercoustom px-lg-4 ">
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class=" navbar-nav text-center list-unstyled  d-flex  justify-content-center align-items-center">
            <li class="nav-item me-4">
              <a class="nav-link text-uppercase text-white " href="#" ><Link to='/' onClick={() => activeTab(1)} className={active === 1 ? 'tab' : 'nav-link'}>HOME <span className='d-none d-md-inline vl'></span></Link> </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link mx-4 text-uppercase" href="#" ><Link to='/quizeme' onClick={() => activeTab(2)} className={active === 2 ? 'tab' : 'nav-link'}>QUIZ ME <span className='vl'></span></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 text-uppercase text-white" href="#"><Link to='/myjarvis' onClick={() => activeTab(3)} className={active === 3 ? 'tab' : 'nav-link'}>MY JARVIS<span className='vl'></span></Link> </a>
              
            </li>

            <li class="nav-item">
              <a class="nav-link mx-4 text-uppercase text-white" href="#"><Link to='/studymaterial' onClick={() => activeTab(4)} className={active === 4 ? 'tab' : 'nav-link'}>STUDY MATERIAL <span className='vl'></span></Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 text-uppercase text-white" href="#"><Link to='/leaderboard' onClick={() => activeTab(5)} className={active === 5 ? 'tab' : 'nav-link'}>LEADERBOARD <span className='vl'></span></Link></a>
            </li>

            <Link to='/abcd' className='nav-link' > <span className='line'></span>
              {/* <div> */}
              {/* <div> */}
              {/* <span classNameName='profile-abcd rounded-5'><i className="fa-solid fa-user ps-1 pe-1 pt-1 pb-2"></i>
            </span>
            <button classNameName='btn abcd-dropdown text-white'>Abcd <i className="fa-solid fa-caret-down"></i></button> */}

              <li className="nav-item dropdown  list-unstyled">
                <a className="nav-link dropdown-toggle col coustomusertxt" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-user p-2 rounded-circle coustomuserbg me-2 text-black"></i>
                  Abcd
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* </div> */}
              {/* </div> */}
              </Link>
            </ul>
          </div>
        </div>
        <br />
      </nav>





      {/* <nav className='navbar text-white  navbar-expand-lg' >
        <div class="container-fluid ">

          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav text-center d-flex  justify-content-center">
              <li class="nav-item mx-5">
                <div class="nav-link text-uppercase text-white" aria-current="page" href="#"> <Link to='/' onClick={() => activeTab(1)} className={active === 1 ? 'tab' : 'nav-link'}>HOME</Link> </div>
              </li>



              <li class="nav-item vl">
                <a class="nav-link mx-5 text-uppercase" href="#" ><Link to='/quizeme' onClick={() => activeTab(2)} className={active === 2 ? 'tab' : 'nav-link'}>QUIZ ME <span className='line'></span></Link></a>
              </li>
              <li class="nav-item vl">
                <a class="nav-link mx-5 text-uppercase text-white" href="#"><Link to='/myjarvis' onClick={() => activeTab(3)} className={active === 3 ? 'tab' : 'nav-link'}>MY JARVIS</Link></a>
              </li>

              <li class="nav-item vl">
                <a class="nav-link mx-5 text-uppercase text-white" href="#"><Link to='/studymaterial' onClick={() => activeTab(4)} className={active === 4 ? 'tab' : 'nav-link'}>STUDY MATERIAL</Link></a>
              </li>
              <li class="nav-item vl">
                <a class="nav-link mx-5 text-uppercase text-white" href="#"><Link to='/leaderboard' onClick={() => activeTab(5)} className={active === 5 ? 'tab' : 'nav-link'}>LEADERBOARD</Link></a>
              </li>






              <Link to='/abcd' className='nav-link' > <span className='line'></span>


                <li className="nav-item dropdown  list-unstyled">
                  <a className="nav-link dropdown-toggle col coustomusertxt" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user p-2 rounded-circle coustomuserbg me-2 text-black"></i>
                    Abcd
                  </a>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
      
              </Link>
            </ul>
          </div>
        </div>
        <br />
      </nav> */}




    </>
  )
}

export default Navbar;