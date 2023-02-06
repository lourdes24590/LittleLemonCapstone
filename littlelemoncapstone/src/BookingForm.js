import './styles.css';
import React, {useState} from 'react';
function BookingForm(props) {
    const [date, setDate] = React.useState([]);
    const [guests, setGuests] = React.useState([]);
    const[time,setTime]= React.useState([]);
    const[occasion,setOcassion]= React.useState([]);
    function handleSubmit(e){
        e.preventDefault();
        props.formSubmit(e.target.value);
    }
    function handleDateChange(e){
        e.preventDefault();
        setDate(e.target.value);
        props.dispatch({'date':e.target.value});
    }
    function handleGuestsChange(e){
        e.preventDefault();
        setGuests(e.target.value);

    }
    function handleOcassionChange(e){
        e.preventDefault();
        setOcassion(e.target.value);

    }
    function handleTimeChange(e){
        e.preventDefault();
        setTime(e.target.value);
        //props?.setavailableTimes(e.target.value);

    }
    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e)=>handleDateChange(e)}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e)=>handleTimeChange(e)}>
            {props.availableTimes?.map((time)=>(<option key={time}>{time}</option>))}
        </select>
        <label htmlFor="guests" >Number of guests</label>
        <input type="number" placeholder={1} min={1} max={10} id="guests" onChange={(e)=>handleGuestsChange(e)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=>handleOcassionChange(e)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" defaultValue="Make Your reservation" > Submit </button>
      </form>
);
}
export default BookingForm;