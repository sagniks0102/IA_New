// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import SubjectSelect from '../SubjectSelectApi';

// const SubjectSelectCard = () => {

//   const [selectclass, setselectclass] = useState('');
//   const options = [
//       {label:"Class V", selectclass: 5},
//       {label:"Class VI", selectclass: 6},
//       {label:"Class VII", selectclass: 7},
//       {label:"Class VIII", selectclass: 8},
//       {label:"Class IX", selectclass: 9},
//       {label:"Class X", selectclass: 10},
//       {label:"Class XI", selectclass: 11},
//       {label:"Class XII", selectclass: 12},
//   ]

//   function handelSelect(event) {
//     setselectclass(event.target.selectclass)
// }

//   const [subjectSelectData, setsubjectSelectData] = useState(SubjectSelect);
//   return (
//     <div>
//       <div className="dropdown ">
//         {/* <button className="float-end btn text-white border-1 border-white dropdown-toggle me-md-5 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
//           Select Class
//         </button> */}
//         <select className="fw-bolder float-end btn text-white border-1 border-white dropdown-toggle me-md-5 " onChange={handelSelect}>
//           {options.map(option=>(
//             <option className='text-white bg-black' selectclass={option.selectclass}>{option.label}</option>
//           ))}
//         </select>
//         {/* <ul className="dropdown-menu">
//           <li><a className="dropdown-item" href="#">Class V</a></li>
//           <li><a className="dropdown-item" href="#">Class VI</a></li>
//           <li><a className="dropdown-item" href="#">Class VII</a></li>
//           <li><a className="dropdown-item" href="#">Class VIII</a></li>
//           <li><a className="dropdown-item" href="#">Class IX</a></li>
//           <li><a className="dropdown-item" href="#">Class X</a></li>
//         </ul> */}
//       </div>
      

      
//       <div className="  ">
//       <section className=" main container  text-white d-flex flex-wrap justify-content-center align-items-center">
//         {subjectSelectData.map((curElem) => {
//           const { id, name, image } = curElem;

//           return (
//             <>

              
//                 {/* <div>
//                   <h1>Welcome to My React App</h1>
//                   <p>This is a paragraph with a background GIF.</p>
//                 </div> */}
//               {/* </div> */}
//               {/* <div className="row"> */}
//               {/* <div className="col-md-3 col-sm-12 col-12"> */}

              
//               <Link to="/TopicCard" className='mx-5'>
//                 <div className="ico2 gap-5 " key={id}>
//                   <div className="text-center">

//                     <img src={image} alt="images" className="card-media" />

//                     <h4 className="card-title mt-1 text-white text-decoration-none">{name}</h4>
//                   </div>

//                 </div>
//               </Link>
//               {/* </div> */}

//               {/* </div> */}
//             </>
//           );
//         })}
//       </section>
//       </div>
//       </div>
    
//   )
// }

// export default SubjectSelectCard




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const subjects1to10 = [
  {
    id: 1,
    image: "image/science.png",
    name: "SCIENCE",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 2,
    image: "image/social.png",
    name: "SOCIAL STUDIES",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 3,
    image: "image/english.png",
    name: "ENGLISH",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 4,
    image: "image/math.png",
    name: "MATHS",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 5,
    image: "image/hindi.png",
    name: "HINDI",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 6,
    image: "image/sanskrit.png",
    name: "SANSKRIT",
    linkQuizstart:"./QuizStartPage",

  },

  // Add other subjects similarly
];

const subjects11to12 = [
  {
    id: 1,
    image: "image/science.png",
    name: "PHYSICS",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 2,
    image: "image/chemistry.png",
    name: "CHEMISTRY",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 3,
    image: "image/english.png",
    name: "ENGLISH",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 4,
    image: "image/math.png",
    name: "MATHS",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 5,
    image: "image/accounts.png",
    name: "ACCOUNTS",
    linkQuizstart:"./QuizStartPage",

  },
  {
    id: 6,
    image: "image/biology.png",
    name: "BIOLOGY",
    linkQuizstart:"./QuizStartPage",

  },

  // Add other subjects similarly
];

const SubjectSelectCard = () => {
  const [selectedClass, setSelectedClass] = useState(6);

  const options = [
    // { label: "Class V", value: 5 },
    { label: "Class VI", value: 6 },
    { label: "Class VII", value: 7 },
    { label: "Class VIII", value: 8 },
    { label: "Class IX", value: 9 },
    { label: "Class X", value: 10 },
    { label: "Class XI", value: 11 },
    { label: "Class XII", value: 12 },
  ];

  const handleSelect = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div>
      <div className="dropdown">
        <select className="fw-bolder float-end btn text-white border-1 border-white dropdown-toggle me-md-5" onChange={handleSelect}>
          {options.map(option => (
            <option key={option.value} value={option.value} className='text-white bg-black'>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="main container text-white d-flex flex-wrap justify-content-center align-items-center gap-5">
        {(selectedClass >= 5 && selectedClass <= 10 ? subjects1to10 : subjects11to12).map(subject => (
          <Link to="/TopicCard" className='mx-5' key={subject.id}>
            <div className="ico2 gap-5">
              <div className="text-center">
                <img src={subject.image} alt={subject.name} className="card-media" />
                <h4 className="card-title mt-1 text-white text-decoration-none">{subject.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubjectSelectCard;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Example subjects data (ensure to include the appropriate data)
// const subjects = [
//   { id: 1, name: 'SCIENCE', image: 'image/science.png' },
//   { id: 2, name: 'MATHS', image: 'image/maths.png' },
//   // Add more subjects as needed
// ];

// const SubjectSelectCard = () => {
//   const [selectedClass, setSelectedClass] = useState(6); // Example default class

//   return (
//     <div>
//       <div className="main container text-white d-flex flex-wrap justify-content-center align-items-center">
//         {subjects.map(subject => (
//           <Link to={`/topic/${selectedClass}/${subject.name.toLowerCase()}`} className='mx-5' key={subject.id}>
//             <div className="ico2 gap-5">
//               <div className="text-center">
//                 <img src={subject.image} alt={subject.name} className="card-media" />
//                 <h4 className="card-title mt-1 text-white text-decoration-none">{subject.name}</h4>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubjectSelectCard;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Example subjects data (ensure to include appropriate data)
// const subjects = [
//   { id: 1, name: 'SCIENCE', image: 'image/science.png' },
//   { id: 2, name: 'MATHS', image: 'image/maths.png' },
//   // Add more subjects as needed
// ];

// const SubjectSelectCard = () => {
//   const [selectedClass, setSelectedClass] = useState('');

//   const classOptions = [
//     { label: "Class V", value: 5 },
//     { label: "Class VI", value: 6 },
//     { label: "Class VII", value: 7 },
//     { label: "Class VIII", value: 8 },
//     { label: "Class IX", value: 9 },
//     { label: "Class X", value: 10 },
//     { label: "Class XI", value: 11 },
//     { label: "Class XII", value: 12 },
//   ];

//   const handleClassSelect = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   return (
//     <div>
//       <select onChange={handleClassSelect} className="form-select form-select-lg mb-3">
//         <option value="">Select a class</option>
//         {classOptions.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>

//       <div className="main container text-white d-flex flex-wrap justify-content-center align-items-center">
//         {subjects.map(subject => (
//           <Link to={`/topic/${selectedClass}/${subject.name.toLowerCase()}`} className='mx-5' key={subject.id}>
//             <div className="ico2 gap-5">
//               <div className="text-center">
//                 <img src={subject.image} alt={subject.name} className="card-media" />
//                 <h4 className="card-title mt-1 text-white text-decoration-none">{subject.name}</h4>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubjectSelectCard;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const SubjectSelectCard = () => {
//   const [selectedClass, setSelectedClass] = useState('');
//   const navigate = useNavigate();

//   const subjects = {
//     lowerClasses: [
//       {
//           id: 1,
//           image: "image/science.png",
//           name: "SCIENCE",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 2,
//           image: "image/social.png",
//           name: "SOCIAL STUDIES",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 3,
//           image: "image/english.png",
//           name: "ENGLISH",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 4,
//           image: "image/math.png",
//           name: "MATHS",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 5,
//           image: "image/hindi.png",
//           name: "HINDI",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 6,
//           image: "image/sanskrit.png",
//           name: "SANSKRIT",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//     ],  // Array for classes V to X
//     upperClasses: [{
//           id: 1,
//           image: "image/science.png",
//           name: "PHYSICS",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 2,
//           image: "image/chemistry.png",
//           name: "CHEMISTRY",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 3,
//           image: "image/english.png",
//           name: "ENGLISH",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 4,
//           image: "image/math.png",
//           name: "MATHS",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 5,
//           image: "image/accounts.png",
//           name: "ACCOUNTS",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//         {
//           id: 6,
//           image: "image/biology.png",
//           name: "BIOLOGY",
//           linkQuizstart:"./QuizStartPage",
      
//         },
//      // Array for classes XI to XII
//     ]
//   }
//     // const [selectedClass, setSelectedClass] = useState('');

//   const classOptions = [
//     { label: "Class V", value: 5 },
//     { label: "Class VI", value: 6 },
//     { label: "Class VII", value: 7 },
//     { label: "Class VIII", value: 8 },
//     { label: "Class IX", value: 9 },
//     { label: "Class X", value: 10 },
//     { label: "Class XI", value: 11 },
//     { label: "Class XII", value: 12 },
//   ];

//   const handleClassSelect = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const handleSelect = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const handleSubjectClick = (subject) => {
//     navigate('/topics', { state: { class: selectedClass, subject: subject.name } });
//   };

//   return (
//     <div>
//       {/* Dropdown selection */}
//       <select onChange={handleClassSelect} className="form-select form-select-lg mb-3">
//      <option value="">Select a class</option>
//        {classOptions.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>


//       <div className="subject-cards main container text-white d-flex flex-wrap justify-content-center align-items-center gap-5">
//         {(selectedClass <= 10 ? subjects.lowerClasses : subjects.upperClasses).map(subject => (
//           <div key={subject.id} onClick={() => handleSubjectClick(subject)} className="subject-card">


// {/* <div className="main container text-white d-flex flex-wrap justify-content-center align-items-center gap-5"> */}
//          {/* {(selectedClass >= 5 && selectedClass <= 10 ? subjects1to10 : subjects11to12).map(subject => ( */}
//            <Link to="/TopicCard" className='mx-5' key={subject.id}>
//              <div className="ico2 gap-5">
//                <div className="text-center">
//                  <img src={subject.image} alt={subject.name} className="card-media" />
//                  <h4 className="card-title mt-1 text-white text-decoration-none">{subject.name}</h4>
//                </div>
//              </div>
//            </Link>
//          {/* ))} */}
//        {/* </div> */}


//             {/* Subject Card Implementation */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default SubjectSelectCard;


