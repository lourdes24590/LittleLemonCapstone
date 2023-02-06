import BookingForm from './BookingForm';
import './styles.css';
function BookingsPage(props) {
    return(
        <div id="bookingsPage">
            <span id="bookingPageTitle">Reserve a Table</span>
            <img src="restaurant.jpg" alt="restaurant tables"/>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} formSubmit={props.formSubmit}/>
        </div>
    );
}
export default BookingsPage;