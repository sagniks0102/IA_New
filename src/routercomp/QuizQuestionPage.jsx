import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import QuizQuestionfromExcel from "./QuizQuestionfromExcel";

const QuizQuestionPage = () => {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(70); // Set to desired starting seconds

  // Load questions from Excel file
  useEffect(() => {
    const readExcelFile = async () => {
      const file = await fetch('./quizQuestion.xlsx');
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer);
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setQuestions(data);
    };
    readExcelFile();
  }, []);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navigate to the next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimer(70); // Reset timer
    }
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTimer(70); // Reset timer
    }
  };


  const alertcustom = () => {
    alert("are u sure");
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // Swal.fire({
    //     //   title: "Deleted!",
    //     //   text: "Your file has been deleted.",
    //     //   icon: "success"

    //     // });
    //     console.log("hellofbnkjadhfkjaef");

    //   }
    // });
  }

  return (
    <>
      <div className="container text-white">
        <div className="backHamb mt-4 d-flex justify-content-between">
          <Link to="/quizeme"><img className="backHambimg" onClick={alertcustom} src="image/Back.png" alt="" /></Link>



          <img className="backHambimg" src="image/HambugerMenu.png" alt="" />
        </div>

        <div>
          {questions.length > 0 && currentIndex < questions.length && (
            <div className="question mt-4 ">
              <img
                className="img-fluid questionBox"
                src="image/QuestionBox.png"
                alt=""
              />
              <h2 className="  text-white">
                {currentIndex + 1}. {questions[currentIndex].Question}
              </h2>

              <div className="quizoption mt-5">
                <div className="row mt-5 d-flex justify-content-center align-items-center">
                  <div className="col-md-6 col-sm-12 col-12 mt-5 text-center  ">
                    <div >
                      <div className=' d-flex justify-content-center quizoptiondiv'>
                        <div className='position-relative quizoptiondiv'>
                          <img className="quizoptionBox" src="image/Option1.png" alt="" />
                          <h4 className='position-absolute optionposition1'>A)</h4>
                        </div>
                        <div className='position-relative quizoptiondiv'>
                          <img className="quizoptionBox2" src="image/Option2.png" alt="" />
                          <h4 className='position-absolute optionposition2'>{questions[currentIndex].OptionA}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12 mt-5 text-center d-flex justify-content-center">
                    <div className='position-relative'>
                      <img className="quizoptionBox" src="image/Option1.png" alt="" />
                      <h4 className='position-absolute optionposition1'>B)</h4>
                    </div>
                    <div className='position-relative'>
                      <img className="quizoptionBox2" src="image/Option2.png" alt="" />
                      <h4 className='position-absolute optionposition2'>{questions[currentIndex].OptionB}</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12 mt-5 text-center d-flex justify-content-center">
                    <div className='position-relative'>
                      <img className="quizoptionBox" src="image/Option1.png" alt="" />
                      <h4 className='position-absolute optionposition1'>C)</h4>
                    </div>
                    <div className='position-relative'>
                      <img className="quizoptionBox2" src="image/Option2.png" alt="" />
                      <h4 className='position-absolute optionposition2'>{questions[currentIndex].OptionC}</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12 mt-5 text-center d-flex justify-content-center">
                    <div className='position-relative'>
                      <img className="quizoptionBox" src="image/Option1.png" alt="" />
                      <h4 className='position-absolute optionposition1'>D)</h4>
                    </div>
                    <div className='position-relative'>
                      <img className="quizoptionBox2" src="image/Option2.png" alt="" />
                      <h4 className='position-absolute optionposition2'>{questions[currentIndex].OptionD}</h4>
                    </div>
                  </div>






                  {/* <div className="col-md-6 col-sm-12 col-12 mt-5 text-center">
                    <img className="quizoptionBox" src="image/OptionBox.png" alt="" />

                    <h4>B) {questions[currentIndex].OptionB}</h4>

                  </div>
                  <div className="col-md-6 col-sm-12 col-12 mt-3 text-center">
                    <img className="quizoptionBox" src="image/OptionBox.png" alt="" />

                    <h4>C) {questions[currentIndex].OptionC}</h4>

                  </div>
                  <div className="col-md-6 col-sm-12 col-12 mt-3 text-center">
                    <img className="quizoptionBox" src="image/OptionBox.png" alt="" />

                    <h4>D) {questions[currentIndex].OptionD}</h4>

                  </div> */}
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="quizbottomn  d-flex justify-content-around align-items-center">
          <div onClick={handlePrevious} disabled={currentIndex === 0} className='pointerbtn'>
            <i class="fa-solid fa-backward fs-1 text-white"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column 
          ">
            <img className="hint" src="image/hint.png" alt="" />
            <div className="timer timerbg text-black text-center mt-2 rounded-5 fs-4 px-3 fw-bold">01:10</div>
          </div>
          <div onClick={handleNext} className={`pointerbtn ${currentIndex === questions.length - 1 ? "" : "fa-solid fa-forward fs-1"}`}>
            {currentIndex === questions.length - 1 && <button className="rounded-pill px-4 py-1 buttonSubmitQuiz" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>}

            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-black">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are You Sure ?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Are You Sure to Submit the Quiz ?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link to="/QuizResult">
                      <button type="button" class="btn btn-primary">Confirm Submit

                      </button>
                      {/* <button className='rounded-pill px-4 fw-bold position-absolute'>LET’S PLAY</button> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button className=''>Submit</button> */}
        </div>
      </div>
    </>
  );
};

export default QuizQuestionPage;
