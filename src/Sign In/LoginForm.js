 import React, {useState} from 'react'
import {Center,Fluid} from './LoginStyled'
import Kas from '../pages/Images/kas.png'
 function LoginForm({Login,error}){

    const [details,setDetails] = useState({login:"",password:""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    
    return(
       <Fluid >
         <Center>
             <img src={Kas} width={150} height={100} alt=""/>
             <form onSubmit={submitHandler}>
                 {(error != "") ? (<p className={'errors'}>{error}</p>) : ""}
                 <div className={'form-inner'}>
                     <div className="form-group">
                         <label htmlFor="login">Логин</label>
                         <input  type="text" name="login" id={"login"} className={'passForm'}
                                 placeholder={'Введите логин'}
                                 onChange={e => setDetails({...details,login:e.target.value})}
                                 value={details.login}/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">Пароль</label>
                         <input type="password" name="password" id={"password"}
                                className={'passForm'} placeholder={"Введите пароль"}
                                onChange={e => setDetails({...details,password:e.target.value})}
                                value={details.password}/>
                     </div>
                     <button type="submit" className={'but'} value={Login}> Войти </button>
                 </div>
             </form>
         </Center>
       </Fluid>
    )
 }
 export default LoginForm