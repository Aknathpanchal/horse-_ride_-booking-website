import LandingPage from './Componenet/LandingPage';
import BookingForm from './Componenet/BookingForm';
import ConfirmationPopup from './Componenet/ConfirmationPopup';
import { setStep, setBookingDetails, resetBooking } from './Redux/reducer';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { step, bookingDetails } = useSelector((state) => state.booking);


  const handleSelectHorse = () => {
    dispatch(setStep(1));
  };

  const handleSubmit = (details) => {
    dispatch(setBookingDetails(details));
    dispatch(setStep(2));
  };

  const handleBack = () => {
    dispatch(setStep(0));
  };

  const handleClose = () => {
    dispatch(resetBooking());
  };

  return (
    <div>
      {step === 0 && <LandingPage onBookNow={handleSelectHorse} />}
      {step === 1 && <BookingForm onSubmit={handleSubmit} onBack={handleBack} />}
      {step === 2 && <ConfirmationPopup bookingDetails={bookingDetails} onClose={handleClose} />}
    </div>
  );
};

export default App;

