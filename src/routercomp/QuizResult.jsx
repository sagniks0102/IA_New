import React from 'react'

const QuizResult = () => {
    return (
        <>
            <div className="container">
                <div className="headingQuizresult d-flex justify-content-between align-items-center">
                    <div className="d-flex text-white justify-content-center gap-4 align-items-center">
                        <img src="image/notebook.png" alt="" />
                        <h2>Congratulations your are on a streak!</h2>
                    </div>
                    <div className="marksQuizresult text-white rounded-2">

                        <p className='text-center p-2 my-auto fs-5 '>183/300</p>
                    </div>
                </div>

                <div className="bodyQuizresult text-white mt-4">
                    <div className="topbutton ">
                        <button className='rounded-top-4 border-0 px-3 py-1 text-white topbuttonCoustombg'>Section A</button>
                        <button className='rounded-top-4 border-0 px-3 py-1 text-white topbuttonCoustombg'>Section B</button>
                        <button className='rounded-top-4 border-0 px-3 py-1 text-white topbuttonCoustombg'>Section C</button>
                        <button className='rounded-top-4 border-0 px-3 py-1 text-white topbuttonActivebg'>Section D</button>
                    </div>
                    <div className="resultdetails">
                        <div>
                            <img src="" alt="" />
                            <h4>Physics - MCQ</h4>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default QuizResult
