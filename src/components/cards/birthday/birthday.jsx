import './index.css';

// const Birthday=({birthdaydata})=>{
// console.log("Birthday Data:", birthdaydata);
// return(
//         <div className='birthdayCards'>
//             <h3 className='birthdayCards_header'>Birthday Calender</h3>
//             <div className='birthday_cards'>
//             {birthdaydata.map((data,index)=>{
//                 return(
//                 <div key={index} className='birthday_card'>
//                     <img src={data.img} alt='profile_pic'/>
//                     <h3>{data.name}</h3>
//                     <h5>{data.position}</h5>
//                     <p>{data.date}</p>
//                 </div>
//                 );
//             })}
//             </div>
//         </div>
//     );
// }
// export default Birthday;

const Birthday = ({ birthdaydata }) => {
    return (
        <div className='birthdayCards'>
            <h3 className='birthdayCards_header'>Birthday Calendar</h3>
            {birthdaydata.length > 0 ? (
                <div className='birthday_cards'>
                    {birthdaydata.map((data, index) => (
                        <div key={index} className='birthday_card'>
                            <img src={data.img} alt='profile_pic' />
                            <h3>{data.name}</h3>
                            <h5>{data.position}</h5>
                            <p>{data.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No Birthdays Today</p>
            )}
        </div>
    );
};
export default Birthday;