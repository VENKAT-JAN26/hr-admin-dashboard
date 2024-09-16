import Colorcard from '../../../components/cards/colorcard/colorcard';
import { leaverequesttable, leavecard } from '../../../constants/jsonconstant';
import Eatable from '../../../components/eatable/table';

import './index.css';
const LeaveRequest=()=>{
    return(
        <div className='leaverequest_page'>
            <Colorcard cardcontent={leavecard} width='79vw' height='24vh' padding_top='20px'/>
            <Eatable  tablecon={leaverequesttable} height='61vh'width='81vw'/>
        </div>
    );
}

export default LeaveRequest;