import styles from './QuizComponent.module.css'
import data from '../../resources/quizQuestion.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function QuizComponent() {

    const [changer, setChanger] = useState(0)
    const [attempted, setAttempted] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const handlePrev = () => {
        if(changer == 0){
            setChanger(data.length - 1)
        }else{
            setChanger(changer - 1)
        }
    }

    const handleNext = () => {
        if(changer == data.length - 1){
            setChanger(changer)
        }else{
            setChanger(changer + 1)
        }
    }

    const handleQuit = () => {
        let userAction = confirm("Are you sure you want to quit ?")
        if(userAction){
            setAttempted(0)
            setCorrect(0)
            setWrong(0)
            setChanger(0)
        }else{
            setAttempted(attempted)
            setCorrect(correct)
            setWrong(wrong)
            setChanger(changer)
        }
    }

    const handleSelect = (option) => {
        if(option == data[changer].answer){
            setAttempted(attempted + 1)
            setCorrect(correct + 1)
            handleNext()
            alert("Correct Answer")
        }else{
            setAttempted(attempted + 1)
            setWrong(wrong + 1)
            handleNext()
            alert("Wrong Answer")
        }

    }

    localStorage.setItem('quizScores', JSON.stringify({ attempted: attempted, correct: correct, wrong: wrong }));

    return (
        <>
            <div className={styles['main-quiz-container']}>
                <h1>Question</h1>
                <p>{changer + 1} of 15</p>
                <h3>{data[changer].question}</h3>
                <div className={styles['options']}>
                    <button onClick={() => handleSelect(data[changer].optionA)}>{data[changer].optionA}</button>
                    <button onClick={() => handleSelect(data[changer].optionB)}>{data[changer].optionB}</button>
                    <button onClick={() => handleSelect(data[changer].optionC)}>{data[changer].optionC}</button>
                    <button onClick={() => handleSelect(data[changer].optionD)}>{data[changer].optionD}</button>
                </div>
                <div className={styles['buttons']}>
                    <button className={styles['previous']} onClick={handlePrev}>Previous</button>
                    <button className={styles['next']} onClick={handleNext}>Next</button>
                    <button className={styles['quit']} onClick={handleQuit}>Quit</button>
                    <Link to="/finish-quiz"> <button className={styles['finish']} >Finish</button> </Link>
                </div>
            </div>
        </>
    )
}