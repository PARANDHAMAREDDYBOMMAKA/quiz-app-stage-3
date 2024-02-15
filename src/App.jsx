/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/Homecomponent";
import QuizComponent from "./components/QuizComponent/QuizComponent";
import ResultComponent from "./components/ResultComponet/ResultComponent";
import { useState } from "react";
import questions from "./resources/quizQuestion.json";

function App() {
  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    questions: questions,
    score: 0,
    noOfCorrect: 0,
    noOfWrong: 0,
    noOfAnswered: 0,
  });

  const handleQuizStateChange = (newState) => {
    setQuizState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route
        path="/quiz"
        element={
          <QuizComponent
            quizState={quizState}
            onChange={handleQuizStateChange}
          />
        }
      />
      <Route
        path="/finish-quiz"
        element={
          <ResultComponent
            location={{
              state: {
                answeredQuestions: quizState.noOfAnswered,
                correctAnswer: quizState.noOfCorrect,
                totalQuestions: quizState.questions.length,
                wrongAnswer: quizState.noOfWrong,
                score: quizState.score,
              },
            }}
          />
        }
      />
    </Routes>
  );
}

export default App;
