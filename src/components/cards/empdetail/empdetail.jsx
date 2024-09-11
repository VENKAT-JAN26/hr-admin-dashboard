import './index.css';
import icons from '../../../constants/icons';
const EmpDetailCard=()=>{
    return(
        <div className='detailofemp_card'>
        <div className='detailofemp_card_header'>
            <h3>Add details of an employee</h3>
            <span>{icons.circleminus}</span>
        </div>
        <div className='detailofemp_input'>
            <div>
                <label>Employee Name <span>*</span></label>
                <input type='text' placeholder='Enter Employee Name'></input>
            </div>
            <div>
                <label>Employee Number <span>*</span></label>
                <input type='number' placeholder='Enter Employee Number'></input>
            </div>
            <div>
                <label>Date of joining  <span>*</span></label>
                <input type='date' placeholder='Enter Joining date'></input>
            </div>
            <div>
                <label>Email Id <span>*</span></label>
                <input type='email' placeholder='Enter Email id'></input>
            </div>
            <div>
                <label>Mobile Number <span>*</span></label>
                <input type='phonenumber' placeholder='Enter Mobile Number'></input>
            </div>
            <div>
                <label>Employee Status <span>*</span></label>
                <input type='text' placeholder='Employee Status'></input>
            </div>

        </div>
    </div>
    );
}

export default EmpDetailCard;

// import './index.css';
// import icons from '../../../constants/icons';
// import { Field, Formik } from 'formik';
// const EmpDetailCard=({empsdetail,header})=>{
//     const empValues={
//         name:'',
//         emid:'',
//         joindate:'',
//         email:'',
//         phnumber:'',
//         status:'',
//     }
//     return(
//         <div className='detailofemp_card'>
//         <div className='detailofemp_card_header'>
//             {header==='basicinfo' && <h3 className='dhone'>Add details of an employee</h3>}            
//             {header==='basicinfo' && <div className='dhtwo'>{icons.circleminus}</div>}
//             {header==='personalinfo' && <h3 className='dhone'>Personal Details</h3>}
//             {header==='personalinfo' && <div className='dhtwo'>{icons.circleplus}</div>}
//         </div>
//         <div className='detailofemp_input'>
//             <Formik initialValues={empValues} >
//              {()=>(
//                 empsdetail.map((emps,index)=>(
//                     <div key={index}>
//                     <label htmlFor={emps.name}>{emps.label} <span>*</span></label>
//                     <Field id={emps.name} name={emps.name} type={emps.type} placeholder={emps.placeholder}/>
//                     </div>
//                 ))        
//               )}
//             </Formik>
//         </div>
//     </div>
//     );
// }

// export default EmpDetailCard;