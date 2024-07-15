import { saveAs } from 'file-saver';
import { createEvent } from 'ics';

export const generateCalendarInvite = (bookingDetails) => {
  const { horse, date, time, name, email } = bookingDetails;

  const event = {
    start: [
      new Date(date).getFullYear(),
      new Date(date).getMonth() + 1,
      new Date(date).getDate(),
      parseInt(time.split(':')[0]) + (time.includes('PM') && time.split(':')[0] !== '12' ? 12 : 0), // Hours
      parseInt(time.split(':')[1]), // Minutes
    ],
    duration: { hours: 1 },
    title: 'Horse Riding Booking',
    description: `Horse riding session with ${horse}`,
    location: 'Horse Stable Location',
    categories: ['Horse Riding', 'Booking'],
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: { name, email },
  };

  createEvent(event, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    const blob = new Blob([value], { type: 'text/calendar' });
    saveAs(blob, 'booking-invite.ics');
  });
};
