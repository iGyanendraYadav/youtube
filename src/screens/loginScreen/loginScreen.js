import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './_loginScreen.scss';
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';


const LoginScreen = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state=>state.auth.accessToken)
    const handleLogin = ()=>{
        dispatch(login());
    }
    
    const navigate = useNavigate();

  useEffect(() => {
   if(accessToken){
    navigate('/')
   }
  
  }, [accessToken, navigate])
  
  return (
    <>

    <div className="login">
        <div className="login__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" srcset="" />
            <button onClick={handleLogin}>Login with Google</button>
            <p>This project is made using YouTube API</p>
        </div>
    </div>
    
    </>
  )
}

export default LoginScreen