import './calender.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Birthday from '../cards/birthday/birthday';
import { birthdata } from '../../constants/jsonconstant';
import { useEffect, useState } from 'react';

const CalenderComponent=()=>{
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredBirthdays, setFilteredBirthdays] = useState([]);
useEffect(() => {
        const updatedBirthdays = birthdata.filter((birthday) => {
            return birthday.date!=='' && new Date(birthday.date).toDateString() === selectedDate.toDateString();
        });
        setFilteredBirthdays(updatedBirthdays);
    }, [selectedDate]);
    
 useEffect(() => {
        const todayBirthdays = birthdata.filter((birthday) => {
            return birthday.date!=='' && new Date(birthday.date).toDateString() === new Date().toDateString();
        });
        setFilteredBirthdays(todayBirthdays);
    }, []); 
 // useEffect(() => {
    //     const updatedBirthdays = birthdata.filter((birthday) => {
    //         return birthday.date && new Date(birthday.date).toDateString() === selectedDate.toDateString();
    //     });
    //     setFilteredBirthdays(updatedBirthdays);
    // }, [selectedDate]);
const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  return(
        <div className='calenderactivity'>
        <div className='calender'>
            <h3>Calender</h3>
            <div style={{display:'flex',justifyContent:'space-around'}} >
            <Calendar  onChange={handleDateChange} value={selectedDate} />
            </div>
        </div>
         <Birthday birthdaydata={filteredBirthdays}/>
        </div>
    );
}
export default CalenderComponent;

