// @ts-nocheck
import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { NotFound } from '../NotFound';
import { Home } from '../../pages/home/Home';
import { Quiz } from '../../pages/quiz/Quiz';


export const MainRoutes = () => {
   
  return (
    
    <BrowserRouter>
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
            <Route index element={<Home />} />
            <Route element={<Quiz/>} path={RoutePaths.QUIZ} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
    </BrowserRouter>

    );
   }