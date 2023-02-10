import './styles.css';
import React, {useState, useEffect} from 'react';
function BookingForm(props) {
    const [date, setDate] = React.useState();
    const [guests, setGuests] = React.useState();
    const [name, setName] = React.useState();
    const[time,setTime]= React.useState();
    const[occasion,setOcassion]= React.useState();
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
    function handleNameChange(e){
        e.preventDefault();
        setName(e.target.value);
    }
    function handleOcassionChange(e){
        e.preventDefault();
        setOcassion(e.target.value);

    }
    function handleTimeChange(e){
        e.preventDefault();
        setTime(e.target.value);
    }
    const [isValid, setValid] = useState(false);
    const validate = () => {
        return document.getElementById('res-date').value.length !==0 &&
        document.getElementById('guests').value.length !==0 && document.getElementById('res-time').value.length !==0 &&
        document.getElementById('occasion').value.length !==0 && document.getElementById('name').value.length !==0;
      };
    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
      }, [date, guests, occasion, time, name]);
    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
        <label htmlFor="name" >Name</label>
        <input type="text" pattern="[a-zA-Z\s]+" title='Please enter alphabets only. ' aria-label="guest name" id="name" onChange={(e)=>handleNameChange(e)} required />
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" aria-label="calendar date" onChange={(e)=>handleDateChange(e)} required />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e)=>handleTimeChange(e)} required >
            {props.availableTimes?.map((time)=>(<option key={time}>{time}</option>))}
        </select>
        <label htmlFor="guests" >Number of guests</label>
        <input type="number" aria-label="number of guests" placeholder={1} min={1} max={10} id="guests" onChange={(e)=>handleGuestsChange(e)} required />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=>handleOcassionChange(e)} required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" aria-label="submit form" disabled={!isValid}> Submit </button>
      </form>
);
}
export default BookingForm;