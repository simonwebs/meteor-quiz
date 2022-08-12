import React from 'react'


export const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
	const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100
  
	return <div className="bg-slate-300 rounded-md dark:bg-slate-800">
    <div className="w-full text-2xl font-weight-bold text-orange-600 bg-gray-200 dark:bg-slate-800 dark:text-white max-w-sm my-12 mx-auto rounded-lg overflow-hidden border border-transparent">{currentQuestionIndex} answered ({totalQuestionsCount - currentQuestionIndex} remaining)</div>
    <div className="bg-green-600 text-xs leading-none py-1 px-2 rounded-sm" style={{ width: `${progressPercentage}%` }} />
	</div>
}
    

