// import { useState } from "react";

// const QuizApp = () => {
//   const questions = [
//     {
//       questionText: "what is the full form of HTML?",
//       answerOptions: [
//         {
//           answerText: "jaydeep",
//           isCorrect: false,
//         },
//         {
//           answerText: "Hardik",
//           isCorrect: false,
//         },
//         {
//           answerText: "gita",
//           isCorrect: true,
//         },
//         {
//           answerText: "manan",
//           isCorrect: false,
//         },
//       ],
//     },
//     {
//       questionText: "what is the full form of CSS?",
//       answerOptions: [
//         {
//           answerText: "maman",
//           isCorrect: false,
//         },
//         {
//           answerText: "dharti",
//           isCorrect: true,
//         },
//         {
//           answerText: "anu",
//           isCorrect: false,
//         },
//         {
//           answerText: "krishna",
//           isCorrect: false,
//         },
//       ],
//     },
//     {
//       questionText: "what is the full form of JavaScript?",
//       answerOptions: [
//         {
//           answerText: "shakti",
//           isCorrect: false,
//         },
//         {
//           answerText: "lila",
//           isCorrect: false,
//         },
//         {
//           answerText: "hansha",
//           isCorrect: false,
//         },
//         {
//           answerText: "janak",
//           isCorrect: true,
//         },
//       ],
//     },
//     {
//       questionText: "what is the full form of HTML5?",
//       answerOptions: [
//         {
//           answerText: "jaydeep",
//           isCorrect: false,
//         },
//         {
//           answerText: "Hardik",
//           isCorrect: false,
//         },
//         {
//           answerText: "gita",
//           isCorrect: true,
//         },
//         {
//           answerText: "manan",
//           isCorrect: false,
//         },
//       ],
//     },
//   ];
//   const [currentQuestion, setcurrentQuestion] = useState(0);
//   const [showScore, setshowScore] = useState(false);
//   const [score, setScore] = useState(0);
//   const handelAnswerButtonClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);

//     }

//     const NextQuestion = currentQuestion + 1;
//     if (NextQuestion < questions.length)
//      {
//       setcurrentQuestion(NextQuestion);
//     }
//      else {
//       setshowScore(true);
//     }
//   };
//   return (
//     <>
//       <div className="app bg-blue-500 h-[625px]">
//         {showScore? (
//           <div className="score-Selection bg-gray-500  text-center  border border-2 border-slate-800 rounded-md p-32">
//             your score is {score} out of {questions.length}
//           </div>
//         ) : (
//           <>
//             <div className=" bg-gray-500 flex justify-center  border border-2 border-slate-800 rounded-md mx-32">
//               <div className="question-section  pr-32 pt-14">
//                 <div className="question-count">
//                   <span>Question {currentQuestion}</span>/{questions.length}
//                 </div>
//                 <div className="question-text">
//                   {questions[currentQuestion].questionText}
//                 </div>
//               </div>
//               <div className="answer-section flex flex-col  justify-center items-center place-content-center gap-4 py-5 ">
//                 {questions[currentQuestion].answerOptions.map(
//                   (answerOption) => (
//                     <button
//                       className="border border-2 border-slate-800 rounded-md hover:bg-gray-700 text-white p-2"
//                       onClick={handelAnswerButtonClick(answerOption.isCorrect)}
//                     >
//                       {answerOption.answerText}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
// export default QuizApp;

import React, { useState, useRef } from "react";
import Confetti from "react-confetti";


const QuizApp = () => {
  const questions = [
    {
      questionText: "What is the full form of HTMl?",
      answerOptions: [
        { answerText: "Hyper Text Makeup Language", isCorrect: false },
        { answerText: "Hyper Text mokeup  Language", isCorrect: false },
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Hindustan Text Markup Language", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "what is the full foem of CSS",
      answerOptions: [
        { answerText: "Cascading Style Sheet", isCorrect: false },
        { answerText: "Cascading  Sheets", isCorrect: false },
        { answerText: "Cascading Styles", isCorrect: false },
        { answerText: "Cascading Style Sheets", isCorrect: true },
      ],
    },
  ];
  const inputRef = useRef(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(inputRef.current.value);
  };
  const startGame = () => {
    setShow(true);
    setHide(false);
  };
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <div className="bg-green-500">
        {hide && (
          <div className="text-center mx-[500px] border bg-gray-500">
			<label htmlFor="">ENTER YOUR NAME:</label><br />
            <input
              ref={inputRef}
              type="text"
              onChange={onChange}
              className=" border border-2 border-slate-800 rounded-md mt-2"
            />
            {/* <input type="text" value={isvalue}  handelchange={setIsValue} className=" border border-2 border-slate-800 rounded-md mt-12"/> */}
            <button
              onClick={startGame}
              className="block  bg-blue-500 mx-40 my-7 p-3"
            >
              Start
            </button>
          </div>
        )}
        {show && (
          <div>
            {showScore ? (
              <div className="score-Selection bg-gray-500 border border-2 border-slate-800 rounded-md text-center py-5 my-[300px] ">
                Congratulations ! {value} your score is {score} out of {questions.length}
				<Confetti
      width={window.width}
      height={window.innerHeight}
    />
              </div>
            ) : (
              <>
                <div className="grid grid-content-center justify-center ">
               
                  <p className="py-5  px-5 mx-32 my-5  border border-slate-200 ">
                    Welcome to Quiz Mr. {value}
                  </p>
                </div>
				<div className="grid grid-content-center justify-center">
                <div className=" bg-gray-500 flex justify-center  border border-2 border-slate-800 rounded-md">
                  <div className="question-section pt-[50px] px-[20px]">
                    <div className="question-count">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div className="question-text">
                      {questions[currentQuestion].questionText}
                    </div>
                  </div>
                  <div className="answer-section flex flex-col  justify-center items-center place-content-center gap-4 py-5  px-5">
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <button
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                          className="border border-2 border-slate-800 rounded-md hover:bg-gray-700 text-white p-2"
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                  </div>
                </div></div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizApp;
