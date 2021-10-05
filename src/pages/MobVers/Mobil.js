import {NavLink} from "react-router-dom";
import React from "react";
import styled from 'styled-components'



export const MobileMenu = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: space-around !important;
  align-items: center !important;
  height: calc(9%);
  background: rgb(223, 227, 227);
  position: fixed;
  bottom: 0;

  
  @media (max-width: 900px) {
    opacity: 1;
  }
`



function Mob(){
    return (  <MobileMenu className={'Mobil'}>
            <NavLink to={'/'} exact activeClassName={'actives'}   className={'text-decoration-none activ  '} >
                <i className="fas fa-home mobIcon"></i>
            </NavLink>

            <NavLink   to={'/sale'} exact activeClassName={'actives'}  className={'text-decoration-none activ'}  >

                <i className="fas fa-hand-holding-usd mobIcon"></i>
            </NavLink>

            <NavLink to={'/create'} exact activeClassName={'actives'}   className={'text-decoration-none activ'} >
                <i className="bi bi-plus-circle mobIcon creatIcon"></i>
            </NavLink>

            <NavLink to={'/shopcard'} exact activeClassName={'actives'}  className={'text-decoration-none  '} >
                <i className="fas fa-cart-plus mobIcon"></i>
            </NavLink>


            <NavLink to={'/history'} exact activeClassName={'actives'}  className={'text-decoration-none activ'}>
                <i className="bi bi-file-earmark-check-fill mobIcon"></i>
            </NavLink>
        </MobileMenu>
    )

}
export default Mob