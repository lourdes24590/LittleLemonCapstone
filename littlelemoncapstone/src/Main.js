import './styles.css';
import {Route, Routes} from 'react-router-dom';
import BookingsPage from './BookingsPage';
import Homepage from './Homepage';
function Main() {
    return (
      <main>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/booking" element={<BookingsPage />}/>
      </Routes>
      </main>
    )
};

export default Main;