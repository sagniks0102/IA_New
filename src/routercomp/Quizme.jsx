// import React from 'react'

// const Quizme = () => {
//   return (
//     <>
//     {/* <div className='text-light'>This is Quiz Me</div> */}
    
    



//     <div className="main container  text-white d-flex flex-wrap justify-content-center align-items-center" >
        
//         <div className="ico p-3 m-3">
//             <a href="">
//                 <img src="image/1.png" alt=""/>
//                 <h6 className="text-center">Plant & Nutrations</h6>
//             </a>
            
//         </div>
//         <div className="ico p-3 m-3">
//             <a href="">
//             <img src="image/2.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/3.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/4.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/5.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/6.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
        
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/7.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
        
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/8.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
        
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/9.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/10.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/11.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/12.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/10.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/11.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
//         <div className="ico p-3 m-3"><a href="">

//             <img src="image/12.png" alt=""/>
//             <h6 className="text-center">Plant & Nutrations</h6>
//         </a>
//         </div>
        
//     </div>
//     <div className='d-flex justify-content-center align-items-center'>
//     <button className='text-center btn text-white border-3 rounded-pill border-white  buttonplay'>PLAY</button>

//     </div>
//     </>

//   )
// }

// export default Quizme



// import React from 'react'

// const Quizme = ({ menuData }) => {
//     // console.log({menuData});
//     return (
//         <>
//             <section className='main-card--cointainer'>
//                 {menuData.map((curElem) => {
//                     const { id, name, image, description } = curElem

//                     return (
//                         <>
//                             <div className='card-container' key={id}>
//                                 <div className='card'>
//                                     <div className='card-body'>
//                                         <span className='card-number card-circle subtle'>
//                                             {id}
//                                         </span>
//                                         <span className='card-author subtle'>{name}</span>
//                                         <h2 className='card-title'>{name}</h2>
//                                         <span className='card-description subtle'>
//                                             {description}
//                                         </span>
//                                         <div className='card-read'>Read</div>
//                                     </div>
//                                     <img src={image} alt="images" className='card-media' />
//                                     <span className='card-tag subtle'>Order Now</span>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}
//             </section>
//         </>
//     )
// }

// export default Quizme





import React, { useState } from 'react'
// import "./style.css"
// import Topic from './menuApi'

// import MenuCard from './MenuCard'
// import Navbar from './Navbar'
import Topic from '../TopicApi'
import TopicCard from './TopicCard'



const uniqueList = [...new Set(Topic.map((curElem) => {
  return curElem.category;
})
),
"All",
]

console.log(uniqueList);

const Quizme = () => {
  const [topicData, setMenuData] = useState(Topic);
//   const [menuList, setMenuList] = useState(uniqueList);

//   const filterItem = (category) => {

//     if (category==="All") {
//       setMenuData(Topic);
//       return;
//     }

//     const updatedList = Topic.filter((curElem) => {
//       return curElem.category === category;
//     })
//     setMenuData(updatedList)
//   }

  return (
    <>

    {/* <h1 className='heading'>Sarkar Dhaba</h1> */}

      {/* <Navbar filterItem={filterItem} menuList={menuList}/> */}



      <div className="dropdown ">
        <button className="float-end btn text-white border-1 border-white dropdown-toggle me-md-5 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Droplist
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      <TopicCard topicData={topicData} />
    </>
  )
}

export default Quizme;

