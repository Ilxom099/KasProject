import React, {useState} from 'react';
import {Route, Redirect,NavLink, Switch} from 'react-router-dom';
import Sales from './pages/Sales/Sales';
import History from './pages/History/History';
import Home from './pages/Home/Home';
import Create from './pages/Form/Form';
import SHopCard from './pages/Shopping/shopping';
import {toast, ToastContainer} from 'react-toastify';
import Links from './Components/Navbar/Links'
import KAS from './pages/Images/kas.png'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import {SideBar,
    LogoImg,
    Content,
    Menu,
    TopNav,
    LogoMenu,
    ShopNumber,
    NavLinks,
    Num,
    MobilNav,
    PageInfo,
    OvalContent,
    Nums,
} from "./StyledComponent";
import {connect} from "react-redux";
import LoginForm from "./Sign In/LoginForm";

function App({card}) {

    //Sign In
    const adminUser = {
        login:"admin",
        password:"admin099"
    }

    const [user,setUser] = useState({login:""})
    const [error,setError] = useState("");

    const Login = details => {

        if (details.login === adminUser.login && details.password === adminUser.password){
            console.log("Logged in")
            setUser({
                login:details.login
            })
        }
        else {
          setError(  "Логин или пароль неверно")

        }
    }
    const Logout = () => {
       setUser({login:""})
    }



    const [toggle,setToggle] = useState(false)
    const [state,setState] = useState('Продукты')

    function Toggle() {
   setToggle(prev => !prev)
}

  return (
     <div>
         {(user.login != "") ? (
             <div className={'container-fluid p-0 m-0'} style={{position:'relative'}}>
                 <ToastContainer />
                 <div>
                     <TopNav>
                         <LogoMenu>
                             <NavLink to={'/'}><LogoImg src={KAS}  /></NavLink>
                             <PageInfo>
                                 <p>{state}</p>
                             </PageInfo>

                             <NavLinks>
                                     <a   data-toggle="collapse" href="#collapseExample"
                                        role="button" aria-expanded="false" >

                                     </a>
                                     <a   data-toggle="collapse"
                                             data-target="#collapseExample" aria-expanded="false"
                                            >
                                         <i className="bi bi-box-arrow-right"> </i>
                                     </a>

                             </NavLinks>
                             <div className="collapse cols" id="collapseExample">
                                 <div className="card card-body">
                                     <span className={'logout'} onClick={Logout}>Выход </span>
                                 </div>
                             </div>
                         </LogoMenu>
                     </TopNav>
                     <div className="d-flex p-0 m-0 ">

                         <SideBar isOpen={toggle} hide={toggle}>

                             <Links toggle={toggle} setToggle={setToggle} setState={setState}/>

                             <Menu onClick={Toggle} toggle={toggle}>
                                 <i className="bi bi-arrow-left" style={{fontSize:'35px'}}> </i>
                             </Menu>
                         </SideBar>

                         <Content>
                             <OvalContent>
                                 <Switch>
                                     <Route path="/" exact> <Home/> </Route>
                                     <Route path="/sale" exact> <Sales/> </Route>
                                     <Route path="/create" exact> <Create/> </Route>
                                     <Route path="/shopcard" exact> <SHopCard/> </Route>
                                     <Route path="/history" exact> <History/> </Route>
                                     <Redirect to="/" />
                                 </Switch>
                             </OvalContent>
                         </Content>

                     </div>
                 </div>
                 <MobilNav>
                     <NavLink exact activeClassName={'main-nav-active'}  to={'/'} className={'mobilLinks'}>
                         <i className="bi bi-house  fonts"> </i>
                     </NavLink>
                     <NavLink exact activeClassName={'main-nav-active'}  to={'/sale'} className={'mobilLinks'}>
                         <i className="bi bi-bag-plus fonts"> </i>
                     </NavLink>
                     <NavLink exact activeClassName={'main-nav-active'}  to={'/create'} className={'mobilLinks'}>
                         <i className="bi bi-plus-circle fonts"> </i>
                     </NavLink>
                     <NavLink exact activeClassName={'main-nav-active'}  to={'/shopcard'} className={'mobilLinks'}>
                         <ShopNumber> <Num>{card.length}</Num> </ShopNumber>
                         <i className="bi bi-cart2 fonts"> </i>

                     </NavLink>
                     <NavLink exact activeClassName={'main-nav-active'}  to={'/history'} className={'mobilLinks'}>
                         <i className="bi bi-journal-text fonts"> </i>
                     </NavLink>
                 </MobilNav>
             </div>
         ) :
             (
                 <LoginForm Login={Login} error={error}/>
             )

         }
     </div>
  );
}

export default connect(({ProductPeducer:{card}})=>({card})
    ,null) (App);




