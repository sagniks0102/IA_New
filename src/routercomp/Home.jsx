import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* <div className='home text-light'>This is Home</div> */}
      <div className="container home coustom-margin ">
        <div className="row flex-md-row flex-column-reverse justify-content-center align-items-center">


          <div className="col-md-6 col-sm-12 col-12 left_letsplay mt-auto d-flex  justify-content-center justify-content-md-start">
            <div className='flex-column '>
              {/* <div className='letsplaybg position-relative '>
                <div>
                  <img src="image/homeletsplay.png" alt="" />
                  <Link to="/quizeme">
                    <button className='rounded-pill px-4 fw-bold position-absolute'>LET’S PLAY</button>
                  </Link>
                </div>

              </div> */}
              <div className='landingbackground-gif'>
                <div className='m-3 pe-5'>
                  <Link to="/quizeme">
                    <button className='rounded-pill px-3 fw-bold m-5'>LET’S PLAY</button>
                  </Link>
                </div>
              </div>


              <div className="homeeclips ms-4 d-flex gap-2">
                <a href=""><img src="image/homeellip2.png" alt="" /></a>
                <a href=""><img src="image/homeellip1.png" alt="" /></a>
                <a href=""><img src="image/homeellip1.png" alt="" /></a>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-sm-12 col-12 right_image d-flex flex-column justify-content-center align-items-center">
            <img className='img-fluid mt-4' src="image/homeimage.png" alt="" />
            <p className='text-white text-center fs-3'>“Let’s create our own AI assistant”</p>
          </div>

        </div>
      </div>




    </>
  )
}

export default Home