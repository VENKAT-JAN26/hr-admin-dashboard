import SignInCard from '../../components/SigninPage/SingInCard';
import './index.css';
import {logo2,} from '../../constants/images'
const SignIn=()=>{
    return(
        <div className='SignIn'>
            {/* <SignInCard className="SignIn_content"/> */}
            <SignInCard/>
            <img className='sign_img'src={logo2} alt='loadind...'/>
        </div>
    );
}
export default SignIn;
