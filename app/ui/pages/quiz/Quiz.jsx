import React, { useEffect, Fragment, useState } from 'react';
import { Question } from './Question';
import { questions} from './questions'
import { ProgressBar } from './ProgressBar';

export const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  
  useEffect(() => {
  	setAnswerStatus(null)
  }, [questionIndex])
  
  useEffect(() => {
  	if (answerStatus) {
			setCorrectAnswerCount(count => count + 1)
		}
  }, [answerStatus])

  const onNextClick = () => {
  	if (questionIndex === questions.length - 1) {
    	setQuizComplete(true)
    } else {
    	setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1)
		}
  }
  
  const onRestartClick = () => {
  	setQuizComplete(false)
    setQuestionIndex(null)
    setCorrectAnswerCount(0)
  }
  
  if (questionIndex == null) {
    return (
      <div  className="relative max-w-4xl mx-auto bg-transparent dark:bg-slate-800">
      <div className="relative bg-transparent dark:bg-slate-800 rounded p-8">
       <div className="max-w-6xl mx-auto z-20">
      <div
        className="text-4xl font-bold text-center mt-20 dark:text-slate-300"
      >
     Test Your Knowlegde
      </div>
     
     
        <button  className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onNextClick}>Start</button>
      </div>
      </div>
      </div>
    )
  }
	
	return (
   
    <div  className="bg-transparent dark:bg-slate-900 mt-16 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="dark:bg-slate-900 rounded-2xl max-w-md w-full space-y-8">
     
      <div className="mt-5">
  
</div>
      {quizComplete ? (
      	<Fragment>
      	  <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-400 dark:text-white">Quiz complete!</h1>
          <h2 className="text-center text-lg leading-8 font-bold tracking-tight text-gray-900 dark:text-sky-500 sm:text-2xl sm:tracking-tight">You answered {correctAnswerCount} questions correctly (out of a total {questions.length} questions)</h2>
        </Fragment>
      ) : (
       <Fragment>
        <ProgressBar currentQuestionIndex={questionIndex} totalQuestionsCount={questions.length} />
        <Question 
          question={questions[questionIndex]} 
          setAnswerStatus={setAnswerStatus}
        />
        {answerStatus != null && (
          <div>
            <div className="mt-2 max-w-3xl text-xl text-gray-300 dark:text-white">{!!answerStatus ? "Correct! :)" : "Your answer was incorrect :("}</div>
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white dark:text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onNextClick}>
            {questionIndex === questions.length - 1 ? "See results of this quiz" : "Next Question ->"}
            </button>
          </div>
        )}
      </Fragment>
      )}
      
      {questionIndex != null && <button className="inline-flex items-center mt-5  px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white dark:text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none" onClick={onRestartClick}>Restart quiz</button>}
    </div>
    </div>
  )
}
