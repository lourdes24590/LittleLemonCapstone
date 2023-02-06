import './styles.css';
import {useNavigate, Route, Routes} from 'react-router-dom';
import React, {useState, useReducer} from 'react';
import BookingsPage from './BookingsPage';
import Homepage from './Homepage';
import { faMarsDouble, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import {fetchAPI, submitAPI} from './api';
import ConfirmedBooking from './ConfirmedBooking';

const defaultTimes = ['17:00','18:00','19:00','20:00','21:00','22:00'];
function updateTimes(availableTimes, action){
  const end = new Date(Date.parse(action.date));
  const resp = fetchAPI(end);
  return resp;
  }

function initializeTimes(){
  const end = new Date(Date.now());
  const resp = fetchAPI(end);
  return resp;
}


function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();
  function SubmitForm(formData){
      const resp = submitAPI(formData);
      if(resp === true){
        navigate('/bookingConfirmation');
      }
  }
    return (
      <main>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/booking" element={<BookingsPage availableTimes={availableTimes} dispatch={dispatch} formSubmit={SubmitForm}/>}/>
        <Route path="/bookingConfirmation" element={<ConfirmedBooking />}/>
      </Routes>
      </main>
    )
};

export default Main;
export {initializeTimes, updateTimes};