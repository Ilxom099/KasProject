import React from "react";
import {NavLink} from 'react-router-dom'
import {Nums} from "../../StyledComponent";
import {connect} from "react-redux";

function Links({setToggle,toggle,setState,card}) {
    return(
        <div>
            <NavLink exact className={'main-nav links'} activeClassName={'main-nav-activeSide'} to={'/'} onClick={()=>setState('Продукты')}>
                <i className="bi bi-house menu-icons" style={{fontSize:'25px'}}> </i>
                {toggle ? <div className={'mx-2'}>Продукты</div> : ''}
            </NavLink>
            <NavLink exact className={'main-nav links'} activeClassName={'main-nav-activeSide'} to={'/sale'} onClick={()=>setState('Продавать')}>
                <i className="bi bi-bag-plus menu-icons" style={{fontSize:'25px'}}> </i>
                {toggle ? <div className={'mx-2'}>Продавать</div> : ''}
            </NavLink>
            <NavLink exact className={'main-nav links'} activeClassName={'main-nav-activeSide'} to={'/create'} onClick={()=>setState('Добавить продукты')}>
                <i className="bi bi-pencil-square  menu-icons" style={{fontSize:'25px'}}> </i>
                {toggle ? <div className={'mx-2'}>Добавить</div> : ''}
            </NavLink>
            <NavLink exact className={'main-nav links'} activeClassName={'main-nav-activeSide'} to={'/shopcard'} onClick={()=>setState('Корзина')}>
                <i className="bi bi-cart2 menu-icons" style={{fontSize:'25px'}}> </i> <Nums>{card.length}</Nums>
                {toggle ? <div className={'karzina'}>Корзина</div> : ''}
            </NavLink>
            <NavLink exact className={'main-nav links'} activeClassName={'main-nav-activeSide'} to={'/history'} onClick={()=>setState('История')}>
                <i className="bi bi-journal-text menu-icons" style={{fontSize:'25px'}}> </i>
                {toggle ? <div className={'mx-2'}>История</div> : ''}
            </NavLink>

        </div>
    )
}
export default connect(({ProductPeducer:{card}})=>({card})
    ,null) (Links);