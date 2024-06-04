import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Subject from '../SubjectApi';
import SubjectSelectCard from './SubjectSelectCard';

const SubjectCard = () => {
  const [subjectData, setsubjectData] = useState(Subject);
  return (
    <div>
          <div className="">
        <section className=" subjectimg container  cardgap-lg-5 gap-3  text-white d-flex flex-wrap justify-content-center align-items-center ">
          {subjectData.map((curElem) => {
            const { id, name, image } = curElem;

            return (
              <>


                {/* <div>
                  <h1>Welcome to My React App</h1>
                  <p>This is a paragraph with a background GIF.</p>
                </div> */}
                {/* </div> */}
                {/* <div className="row"> */}
                {/* <div className="col-md-3 col-sm-12 col-12"> */}
                <Link to="/TopicCard">
                  <div className="ico" key={id}>
                    <div className="text-center">
                      <img src={image} alt="images" className="card-media" />
                      <p className="card-title mt-1 text-white text-decoration-none">{name}</p>
                    </div>
                  </div>
                </Link>
                {/* </div> */}

                {/* </div> */}
              </>
            );
          })}
        </section>
      </div>
      <div className='d-flex justify-content-center mb-1'>
      {/* <img  src="image/line.png" alt="" /> */}
      </div>
      <SubjectSelectCard />
    </div>
  )
}

export default SubjectCard
