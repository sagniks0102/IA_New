import React, { useState } from "react";
import { Link } from "react-router-dom";
import Topic from "../TopicApi";

const TopicCard = () => {
  const [topicData, setMenuData] = useState(Topic);

  return (
    <div className="">
      <section className="topicimg container coustom-margin2 cardgap-lg-5 gap-5 text-white d-flex flex-wrap justify-content-center align-items-center">
        {topicData.map((curElem) => {
          const { id, name, image } = curElem;

          return (
            <Link to="/QuizStartPage" key={id} className="ico">
            <div key={id} className="ico">
              <div className="text-center">
                <img src={image} alt={name} className="card-media" />
                <p className="card-title mt-1 text-white text-decoration-none">{name}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default TopicCard;










// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import Topic from "../TopicApi"; // Ensure this API includes class and subject filtering

// const TopicCard = () => {
//   const { classId, subject } = useParams();
//   const [topicData, setTopicData] = useState([]);

//   useEffect(() => {
//     const filteredTopics = Topic.filter(t => t.classId === parseInt(classId) && t.subject.toLowerCase() === subject);
//     setTopicData(filteredTopics);
//   }, [classId, subject]);

//   return (
//     <div>
//       <section className="topicimg container coustom-margin2 cardgap-lg-5 gap-5 text-white d-flex flex-wrap justify-content-center align-items-center">
//         {topicData.map(({ id, name, image }) => (
//           <Link to="/QuizStartPage" key={id} className="ico">
//             <div className="text-center">
//               <img src={image} alt={name} className="card-media" />
//               <p className="card-title mt-1 text-white text-decoration-none">{name}</p>
//             </div>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default TopicCard;






// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import Topic from "../TopicApi"; // Ensure this API includes class and subject for filtering

// const TopicCard = () => {
//   const { classId, subject } = useParams();
//   const [topicData, setTopicData] = useState([]);

//   useEffect(() => {
//     const filteredTopics = Topic.filter(t => t.classId === parseInt(classId) && t.subject.toLowerCase() === subject);
//     setTopicData(filteredTopics);
//   }, [classId, subject]);

//   return (
//     <div>
//       <section className="topicimg container coustom-margin2 cardgap-lg-5 gap-5 text-white d-flex flex-wrap justify-content-center align-items-center">
//         {topicData.map(({ id, name, image }) => (
//           <Link to="/QuizStartPage" key={id} className="ico">
//             <div className="text-center">
//               <img src={image} alt={name} className="card-media" />
//               <p className="card-title mt-1 text-white text-decoration-none">{name}</p>
//             </div>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default TopicCard;





// import React from "react";
// import { useLocation } from "react-router-dom";
// import Topic from "../TopicApi";

// const TopicCard = () => {
//   const location = useLocation();
//   const { class: selectedClass, subject: selectedSubject } = location.state || {};

//   const filteredTopics = Topic.filter(topic => topic.class === selectedClass && topic.subject === selectedSubject);

//   return (
//     <div>
//       <section className="topicimg container coustom-margin2 cardgap-lg-5 gap-5 text-white d-flex flex-wrap justify-content-center align-items-center">
//         {filteredTopics.map((topic) => (
//           <div key={topic.id} className="ico">
//             {/* Topic Card Implementation */}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default TopicCard;
