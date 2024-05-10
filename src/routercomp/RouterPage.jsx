import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Quizme from './Quizme'
import MyJarvis from './MyJarvis'
import StudyMaterial from './StudyMaterial'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import QuizStartPage from './QuizStartPage'
import QuizQuestionPage from './QuizQuestionPage'
import QuizResult from './QuizResult'
const RouterPage = () => {
  return (
    <>
        <div className='container'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/quizeme' element={<Quizme/>} />
                <Route path='/myjarvis' element={<MyJarvis/>} />
                <Route path='/studymaterial' element={<StudyMaterial/>} />
                <Route path='/leaderboard' element={<LeaderBoard/>} />
                <Route path='/QuizStartPage' element={<QuizStartPage/>} />
                <Route path='/quizQuestionPage' element={<QuizQuestionPage/>} />
                <Route path='/QuizResult' element={<QuizResult/>} />

                {/* <Route path='/' element={} /> */}
            </Routes>
        </Router>
        </div>
    </>
  )
}

export default RouterPage