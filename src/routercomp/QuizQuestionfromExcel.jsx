import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

function QuizQuestionfromExcel() {
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

    return (
        <div className='text-white'>
            <div>
                {questions.length > 0 && currentIndex < questions.length && (
                    <div>
                        <h1>{currentIndex + 1}. {questions[currentIndex].Question}</h1>
                        <h4>A) {questions[currentIndex].OptionA}</h4>
                        <h4>B) {questions[currentIndex].OptionB}</h4>
                        <h4>C) {questions[currentIndex].OptionC}</h4>
                        <h4>D) {questions[currentIndex].OptionD}</h4>
                        <h3>Answer. {questions[currentIndex].Answer}</h3>
                    </div>
                )}
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
                {/* <div>Timer: {timer}</div> */}
            </div>
        </div>
    );
}

export default QuizQuestionfromExcel;
