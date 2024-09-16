import './index.css';
import icons from '../../constants/icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Eatable=({tablecon,tableclass='eatable_component'})=>{

    const [searchvalue,setsearchvalue]=useState('');
    const [showoption,setshowoption]=useState(true);
    const location=useLocation();
    const filteredEmployees = searchvalue ?tablecon.filter(data =>
            data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
            (data.name?.rollnum || '').toLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
    : tablecon;

    const isleaverequestpage=location.pathname==="/attendance/leaverequest";
    const isemployeepage=location.pathname==="/employee/employeelist";
    return(
        <div className={tableclass}>
            <div className='eatable_header'>
                   <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
                    <div className='eatable_header_search'>
                        <button className='search-button'>{icons.search}</button>
                        <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
                    </div>
             </div> 
               <table style={{overflowX:'auto'}}>
                    <thead>
                        <tr>
                            <th style={isleaverequestpage?{width:'205px'}:null}>{tablecon[0].header.col1}</th>
                            {isemployeepage?
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Joined date</option>
                            <option value="1">Created date</option>
                            <option value="2">Releved Dated</option>
                            <option value="3">Salary Hike date by</option>
                            </select> :<th>{tablecon[0].header.col2}</th>}
                            <th>{tablecon[0].header.col3}</th>
                            <th>{tablecon[0].header.col4}</th>
                            <th style={isleaverequestpage?{color:'#4F5E74'}:{color:'#808080'}}>{tablecon[0].header.col5}</th>
                            {isleaverequestpage && <th>{tablecon[0].header.col6}</th>}
                            {isleaverequestpage &&<th style={{color:'#808080'}}>{tablecon[0].header.col7}</th> } 
                        </tr>                      
                    </thead>
                    <tbody>
                        {filteredEmployees.map((data,index)=>{
                            return(
                                    <tr key={index}>
                                        <td>
                                            <div className='table_emp_name'>
                                                <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
                                                <h4 >{data.name?.rollnum}</h4>
                                                <div className='table_name_email'>
                                                    <h4 className>{data.name.name}</h4>
                                                    <p>{data.name.email}</p>  
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.date}</td>
                                        <td>{data.designation}</td>
                                    {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.Reason}</td>}
                                    {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.days}</td>}
                                        <td>{data.status}</td>
                                        <td style={{position:'relative'}}>
                                            <div class='threedot'>{icons.threedot}</div>
                                            <div className={showoption?'leave_action':'leave_action_disapper'} onClick={(e)=>(setshowoption(!showoption))}>
                                                <h5>{icons.correct} Approve Leave</h5> 
                                                <h5>{icons.wrong} Reject Leave</h5>
                                                <h5>{icons.eye} View Details</h5>
                                            </div>
                                        </td> 
                                    
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
        </div>
    );
}
export default Eatable;


// import './index.css';
// import icons from '../../constants/icons';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// const Eatable=({tablecon,height,width})=>{

//     const [searchvalue,setsearchvalue]=useState('');
//     const location=useLocation();
//     const filteredEmployees = searchvalue ?tablecon.filter(data =>
//             data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
//             (data.name?.rollnum || '').toLowerCase().includes(searchvalue.toLocaleLowerCase())
//         )
//     : tablecon;

//     const isleaverequestpage=location.pathname==="/attendance/leaverequest";
//     return(
//         <div className='eatable_component' style={{height:height,width:width}}>
//             <div className='eatable_header'>
//                    <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
//                     <div className='eatable_header_search'>
//                     <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
//                     <span>{icons.search}</span>
//                     </div>
//             </div> 
//             <table>
//                     <tr>
//                         <th>{tablecon[0].header.col1}</th>
//                         <th>{tablecon[0].header.col2}</th>
//                         <th>{tablecon[0].header.col3}</th>
//                         <th>{tablecon[0].header.col4}</th>
//                         <th style={isleaverequestpage?{color:'#4F5E74'}:{color:'#808080'}}>{tablecon[0].header.col5}</th>
//                         {isleaverequestpage && <th>{tablecon[0].header.col6}</th>}
//                         {isleaverequestpage &&<th style={{color:'#808080'}}>{tablecon[0].header.col7}</th> }                       
//                     </tr>
//                     {filteredEmployees.map((data,index)=>{
//                         console.log(data)
//                         return(
//                             <tr key={index}>
//                                 <td>
//                                     <div style={{display:'flex',gap:'30px'}}>
//                                        <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
//                                         <h4 style={{color:'black'}}>{data.name?.rollnum}</h4>
//                                         <div>
//                                             <h4 style={{color:'black'}}>{data.name.name}</h4>
//                                             <p>{data.name.email}</p>  
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>{data.date}</td>
//                                 <td>{data.designation}</td>
//                                {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.Reason}</td>}
//                                {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.days}</td>}
//                                 <td>{data.status}</td>
//                                 <td style={{color:'#808080'}}>{icons.threedot}</td> 
//                             </tr>
//                         );
//                     })}
//             </table>           
//         </div>
//     );
// }
// export default Eatable;

// import './index.css';
// import icons from '../../constants/icons';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// const Eatable=({tablecon,tableclass='eatable_component'})=>{

//     const [searchvalue,setsearchvalue]=useState('');
//     const [showoption,setshowoption]=useState(true);
//     const location=useLocation();
//     const filteredEmployees = searchvalue ?tablecon.filter(data =>
//             data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
//             (data.name?.rollnum || '').toLowerCase().includes(searchvalue.toLocaleLowerCase())
//         )
//     : tablecon;

//     const isleaverequestpage=location.pathname==="/attendance/leaverequest";
//     const isemployeepage=location.pathname==="/employee/employeelist";
//     return(
//         <div className={tableclass}>
//             <div className='eatable_header'>
//                    <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
//                     <div className='eatable_header_search'>
//                         <button className='search-button'>{icons.search}</button>
//                         <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
//                     </div>
//              </div> 
//                <table style={{overflowX:'auto'}}>
//                     <thead>
//                         <tr>
//                             <th style={isleaverequestpage?{width:'205px'}:null}>{tablecon[0].header.col1}</th>
//                             {isemployeepage?
//                             <select class="form-select form-select-sm" aria-label=".form-select-sm example">
//                             <option selected>Joined date</option>
//                             <option value="1">Created date</option>
//                             <option value="2">Releved Dated</option>
//                             <option value="3">Salary Hike date by</option>
//                             </select> :<th>{tablecon[0].header.col2}</th>}
//                             <th>{tablecon[0].header.col3}</th>
//                             <th>{tablecon[0].header.col4}</th>
//                             <th style={isleaverequestpage?{color:'#4F5E74'}:{color:'#808080'}}>{tablecon[0].header.col5}</th>
//                             {isleaverequestpage && <th>{tablecon[0].header.col6}</th>}
//                             {isleaverequestpage &&<th style={{color:'#808080'}}>{tablecon[0].header.col7}</th> } 
//                         </tr>                      
//                     </thead>
//                     <tbody>
//                         {filteredEmployees.map((data,index)=>{
//                             return(
//                                     <tr key={index}>
//                                         <td>
//                                             <div className='table_emp_name'>
//                                                 <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
//                                                 <h4 >{data.name?.rollnum}</h4>
//                                                 <div className='table_name_email'>
//                                                     <h4 className>{data.name.name}</h4>
//                                                     <p>{data.name.email}</p>  
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>{data.date}</td>
//                                         <td>{data.designation}</td>
//                                     {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.Reason}</td>}
//                                     {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.days}</td>}
//                                         <td>{data.status}</td>
//                                         <td style={{position:'relative'}}>
//                                             <div class='threedot'>{icons.threedot}</div>
//                                             <div className={showoption?'leave_action':'leave_action_disapper'} onClick={(e)=>(setshowoption(!showoption))}>
//                                                 <h5>{icons.correct} Approve Leave</h5> 
//                                                 <h5>{icons.wrong} Reject Leave</h5>
//                                                 <h5>{icons.eye} View Details</h5>
//                                             </div>
//                                         </td> 
                                    
//                                     </tr>
//                                 );
//                             })}
//                     </tbody>
//                 </table>
//         </div>
//     );
// }
// export default Eatable;

// .eatable_component{
//     display: flex;
//     flex-direction: column;
//     height: 79vh;
//     width: 82vw;
//     box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
//     border-radius:10px;
//     padding:1%;
//     overflow-x: hidden;
//     overflow-y:auto;
//  }
//  .leave_card_table_outlet{
//    display: flex;
//    flex-direction: column;
//    height:61vh;
//    width:83vw;
//    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
//    border-radius:10px;
//    padding:1%;
//    overflow-x: hidden;
//    overflow-y:auto;
//  }
//  .eatable_header{
//    width: 100%;
//    display: flex;
//    justify-content: space-between;
//  }
//  .eatable_header h4{
//    font-family: 'Inter';
//    font-size: 17px;
//    font-weight: 600;
//    line-height: 22px;
//    text-align: left;
//  }
//  .eatable_header h4 span{
//    font-family: 'Inter';
//    font-size: 17px;
//    font-weight: 600;
//    line-height: 22px;
//    text-align: left;
//    color: #2F2F2F66;
//    margin-left: 1.5vw;
//  }
//  .eatable_header_search{
//   height: 42px;
//   border: 1px solid black;
//   display: flex;
//   align-items: center;
//   border-radius: 8px;
//   background-color: white;
//  }
//  .search-button{
//    background-color: white;
//    font-size:25px;
//    padding-left: 3px;
//    border: none;
//    height: max-content;
//    outline: none;
//  }
//  .eatable_header input{
//    text-align: left;
//    width: 187px;
//    height: 36px;
//    border: none;
//    outline: none;
//    padding-left: 6px;
//  }
//  table {
//    border-collapse: collapse;
//    border-spacing: 0;
//    width: 100%;
//    border: none  ;
//  }
//  th{
//    padding: 15px;
//    color: #4F5E74;
//    font-family:'Inter';
//    font-size: 12px;
//    font-weight: 600;
//    line-height: 14.52px;
//    letter-spacing: 0.019999999552965164px;
//    text-align: left;
//  }
//  td {
//    white-space: nowrap;
//    padding: 15px;
//    color: #70768C;
//    font-family: 'Inter';
//    font-size: 14px;
//    font-weight: 500;
//    line-height: 16.94px;
//    letter-spacing: -0.15399999916553497px;
//    text-align: left;
//  }
//  .table_emp_name h4{
//    font-family: 'Inter';
//    font-size: 14px;
//    font-weight: 600;
//   }
 
//  .table_emp_name{
//    display: flex;
//    gap:19px;
//    font-family: 'Inter';
//    font-size: 14px;
//    font-weight: 600;
//    letter-spacing: -0.15399999916553497px;
//    line-height: 18px;
//    text-align: left;
//    color: black;
//  }
//  .table_name_email{
//    width: 140px;
//    }
//    .table_name_email h4{
//      font-family: 'Inter';
//    font-size: 14px;
//    font-weight: 600;
//    }
 
//  .table_name_email p{
//    color: #70768C;
//    font-family: 'Inter';
//    font-size: 12px;
//    font-weight: 400;
//    line-height: 14.52px;
//    letter-spacing: -0.15399999916553497px;
//    text-align: left;
//    overflow: hidden; 
//    white-space: nowrap; 
//    text-overflow: ellipsis;
//  }
//  .form-select{
//    border: none;
//    outline: none;
//    color: #4F5E74;
//    width: 130px;
//    height: 27px;
//    font-family: 'Inter';
//    font-size: 14px;
//    font-weight: 400;
//    line-height: 16.94px;
//    letter-spacing: -0.15399999916553497px;
//    text-align: left;
//  }
//  option{
//    border: none;
//    outline: none;
//  }
//  .leave_action{
//    position:absolute;
//    width: 158px;
//    height: 19vh;
//    padding: 8px 16px 8px 16px;
//    display: flex;
//    flex-direction: column;
//    gap: 8px;
//    border: 1px solid #C4C4C4; 
//    background-color: white;
//    right: 50px;
//    display: none;   
//  }
//  .leave_action_disapper{
//    position:absolute;
//    width: 158px;
//    height: 19vh;
//    padding: 8px 16px 8px 16px;
//    display: flex;
//    flex-direction: column;
//    gap: 8px;
//    border: 1px solid #C4C4C4; 
//    background-color: white;
//    right: 50px;
//  }
//  .leave_action h5{
//  color: black;
//  font-family: 'Inter';
//  font-size: 14px;
//  font-weight: 400;
//  line-height: 16.94px;
//  letter-spacing: -0.15399999916553497px;
//  text-align: left;
//  border-radius: 0px 4px 4px 4px;
//  }
 
//  .threedot:hover + .leave_action {
//    display: block;
//  }
 
//   @media (max-width:1060px){
//    .eatable_header input{
//      padding-left: 5vw;
//    }
//    .eatable_component{
//      display: flex;
//      flex-direction: column;
//      height: 82vh;
//      width: 83vw;
//      box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
//      border-radius:10px;
//      padding:1%;
//      overflow-x: auto;
//      overflow-y:auto;
//   }
//   .leave_card_table_outlet{
//    overflow-x: auto;
//    overflow-y:auto;
//   }
//  }
 
//  @media (max-width: 1216px) {
//    .eatable_component{
//      height: 79vh;
//      width: 91vw;
//  } 
//  }
//  @media (max-width:1027px) {
//    .eatable_header{
//       flex-direction: column;
//    }
//      .eatable_header_search {
//          margin: 20px 0px;
//          width: max-content;
//      }
//  }
//  @media (max-width:920px) {
//    .leave_card_table_outlet{
//       width: 90vw;
//    }  
//  }
 
//  @media (max-width:869px) {
 
//    .eatable_component{
//      width: 94vw;
//      margin-top: -44px;
//     }
//    /* .leave_card_table_outlet{
//       width: 96vw;
//       margin-top: 30px;
//    }   */
//  }
 
//  @media (max-width:670px) {
//    .eatable_component{
//     width: 96vw;
//     margin-top: -50px;
//    }
//    .eatable_header_search {
//      margin: 20px 5px;
//      width: max-content;
//  }
//  }
 
//  @media (max-width:536px) {
//    .eatable_component{
//     width: 96vw;
//     margin-top:-43px;
//    }
//    .eatable_header_search {
//      margin: 20px 5px;
//      width: max-content;
//  }
//  }
 