import React from "react";
import QuizStartPage from "./QuizStartPage";
import { Link } from "react-router-dom";

const TopicCard = ({ topicData }) => {


  return (
    <>
    <div className="">


      <section className=" main container coustom-margin2 cardgap-lg-5 gap-5  text-white d-flex flex-wrap justify-content-center align-items-center ">
        {topicData.map((curElem) => {
          const { id, name, image } = curElem;

          return (
            <>
              {/* <div className="row"> */}
                {/* <div className="col-md-3 col-sm-12 col-12"> */}
                <Link to="/QuizStartPage">
                  <div className="ico    " key={id}>
                    <div className="text-center">

                      <img src={image} alt="images"  className="card-media" />
                      
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
    </>
  );
};

export default TopicCard;
