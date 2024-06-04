import React from "react";
import RouterPage from "./routercomp/RouterPage";
import QuizStartPage from "./routercomp/QuizStartPage";
import QuizQuestionPage from "./routercomp/QuizQuestionPage";
import Questionhamb from "./routercomp/Questionhamb";
import QuizResult from "./routercomp/QuizResult";
import QuizQuestionfromExcel from "./routercomp/QuizQuestionfromExcel";
import TopicCard from "./routercomp/TopicCard";
import SubjectCard from "./routercomp/SubjectCard";
import "./styles.css";

const App = () => {
  return (
    <div>
      <RouterPage />
      {/* <TopicCard/> */}
      {/* <SubjectCard/> */}
      {/* <video autoPlay loop muted playsInline className='video-position' src="./img/bgvideo.mp4"></video>
       */}

      {/* <div className="videocontainer">
        <video
          autoPlay
          loop
          muted
          className="backgroundvideo"
          playsInline="true"
        >
          <source src="image/bgvideo2.mp4" type="video/mp4" />
        </video>
      </div> */}
      
      <div className="videocontainer">
        <video
          autoPlay
          loop
          muted
          className="backgroundvideo"
          playsInline="true"
        >
          <source src="image/bgvideo2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <div className="backgroundvideo"></div> */}

      {/* <div className="background-gif">
      <div>
        <h1>Welcome to My React App</h1>
        <p>This is a paragraph with a background GIF.</p>
      </div> */}

      {/* <QuizQuestionfromExcel/> */}
      {/* <QuizStartPage/> */}
      {/* <QuizQuestionPage/> */}
      {/* <Questionhamb/> */}
      {/* <QuizResult/> */}
    </div>
  );
};

export default App;
