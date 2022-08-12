import React, { useState, useEffect } from 'react'

export const Question = ({ question, setAnswerStatus }) => {
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
	
  useEffect(() => {
  	if (selectedAnswerIndex != null) {
    	setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex)
    }
  }, [selectedAnswerIndex])
  
  useEffect(() => {
  	setSelectedAnswerIndex(null)
  }, [question])
  
  const getClasses = (index) => {
  	let classes = []
    if (selectedAnswerIndex != null) {
      if (selectedAnswerIndex === index) {
        classes.push("selected")
      }
      if (index === question.correctAnswerIndex) {
        if (selectedAnswerIndex === index) {
          classes.push("correct")
        } else {
          classes.push("incorrect")
        }
      }
    }
    
    return classes.join(" ")
  }
  
	return (
  	<div className="w-full">
      <div className="text-left text-3xl font-extrabold text-slate-400 dark:text-white">{question.question}</div>
      <div className="mt-5 text-slate-500 dark:text-white">


        {question.answers.map((answer, index) => {
        	return <div key={index} className={`answer ${getClasses(index)}`} onClick={() => selectedAnswerIndex == null && setSelectedAnswerIndex(index)}>{answer}</div>
      	})}
      </div>
    </div>
    
  
    
 )
}
