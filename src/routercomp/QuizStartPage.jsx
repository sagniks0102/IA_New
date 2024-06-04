import React from 'react'
import { Link } from 'react-router-dom'

const QuizStartPage = () => {
  return (
    <>
      {/* <h1 className='text-white'>Quiz Start Page</h1> */}

      <div className="container">
        <div className="row mt-5 justify-content-center align-items-center">
          {/* <div className="col-md-4 col-sm-12 col-12">
            <img className='img-fluid' src="image/play.png" alt="" />
          </div> */}
          {/* <div className=" col-md-8 col-sm-12 col-12 mt-md-0 mt-4"> */}
            {/* <img className='img-fluid' src="image/toplayer.png" alt="" /> */}
            <div className="background-gif2">
              <p className='text-white px-4 fs-4'>So, what's in the future for AI? Well, imagine having AI doctors who can diagnose illnesses faster or AI chefs who know your favorite recipes. Scientists are even working on AI that can help protect our planet by understanding climate changes. The future is full of exciting possibilities?</p>
              {/* <img className='img-fluid' src="image/bottomlayer.png" alt="" /> */}
            </div>

          {/* </div> */}
        </div>
        <div className="rgbimage d-flex justify-content-md-end">
          <img className='img-fluid' src="image/rgb.png" alt="" />
        </div>
        <div className="startQuizbtn text-center mt-2">

          <Link to="/quizQuestionPage">

            <button className=' rounded-pill px-3 py-1'>START</button>
          </Link>

        </div>
      </div>

    </>
  )
}

export default QuizStartPage
