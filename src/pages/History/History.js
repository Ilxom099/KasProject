import React, {useEffect, useState} from "react";
import axios from 'axios'
import {HistoryBlock,
    CardHistory,
    CardHeder,
    CardItem,
    CardImage,
    Bolder,
    Poisk,
    Div,
    Pokupka
} from './historyStyled'
import {Block, Pag, Pagination, Sale,DivPag} from "../Home/product";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import {getPost,} from '../../store/product_reducer';
import {connect} from "react-redux";

function History({backupp,loader,getPost,}) {

    const [history,setHistory] = useState([]);
    const [load,setLoad] = useState(true);
    const [date,setdate] = useState('');
    const [product, setProduct] = useState([]);



    const [pages, setPages] = useState(10)
    const [pages1, setPages1] = useState(false)
    const [pageDisebled, setpageDisabled] = useState(false)
    const [pageDisable, setPageDisable] = useState(true)
    const [product1, setProduct1] = useState([]);

    const [page,setPage] = useState(1)



    function Filters(val) {
        return history.filter((item) => item.category === val || val === '')
    }





    useEffect(()=>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
            method:'GET'
        }).then((res)=>{
            setHistory(res.data.filter((item,index)=>index>=0 && index<10))
            setLoad(false)
            setProduct(res.data)
            setProduct1(res.data)
        }).catch((error)=>{
            console.log(error)
        });
    },[]);






    function filters (page){

        return product.filter((item,index)=> index>=(page-1)*10 && index<page*10)
    }


    useEffect(()=>{
        const res = filters(page)

        if (pages1 === true) {

            if (res.length !== 10) {
                setPages(prev => prev + res.length)
                setpageDisabled(true)
            } else {

                setPages(prev => prev + res.length)

            }
        } else {

            setPages(prev => prev - history.length)
        }

        setHistory(res)
    },[page])



    function PaginationPrev() {
        setPages1(false)
        if (page === 1) {

            setPageDisable(true)
        } else {
            setPage(prev => prev - 1)
            setPageDisable(false)
        }
        setpageDisabled(false)
    }

    function PaginationNext() {
        setPages1(true)
        setPage(prev => prev + 1)

        setPageDisable(false)
    }





    return(
        <Block>
           <Sale className={'story'}>
               История
           </Sale>
            <Div>
                <Poisk>Поиск по дате</Poisk>

                <input className={'Date '}  type="date"
                       onChange={(e)=>setdate(e.target.value)}
                       placeholder={'set Data'} />
            </Div>
            <HistoryBlock>
                 {load ? <div className={'loader'}> </div> :
                    history.filter(item => {
                        if (date === ''){
                            return item
                        }
                        if (item.createdAt.substring(0, 10) === date ){
                            return item
                        }
                }).map((item, index) =>
                        <CardHeder key={index}>
                            <CardImage>
                                <i className="bi bi-clipboard-check "> </i>
                            </CardImage>
                            <CardHistory>
                                <div>

                                    <Bolder>  {item.createdAt.substring(0, 10)}</Bolder>
                                </div>
                                <div>

                                    <Bolder>{item.createdAt.substring(12, 16)}</Bolder>
                                </div>
                            </CardHistory>
                            <CardItem>

                                <div><b>Имя</b></div>
                                <div><b>Kоличество</b></div>
                                <div><b>Цена</b></div>
                            </CardItem>
                            {
                                item.productList.map((item, index) => <CardItem key={index} className={'w-100'}>

                                    <Bolder>{item.product.productName}</Bolder>
                                    <Bolder className={'text-center'}>{item.amount}</Bolder>
                                  <b>  <span className={"UzsHistor"}>{item.product.price + ' UZS'}</span></b>
                                </CardItem>)
                            }
                            <Pokupka>
                                <span className={'PokupLeng'}>Покупок: {item.productList.length}</span>

                                <span className={'total'}> {new Intl.NumberFormat(['ban','id']).format(
                                        item.productList.reduce((total,dev)=>{
                                            total += dev.product.price * dev.amount
                                            return total
                                        },0)
                                    )} UZS
                            </span>
                            </Pokupka>

                        </CardHeder>
                    )

                }
            </HistoryBlock>
            <DivPag className={'text-right'}>
                <Pagination >
                    <nav className={'pagination-nav'}>

                        <div className={'mb-3   page-texts'}>
                            <span className={'mx-3 text-primary page-texts'}> {pages}</span>
                            Из
                            <span className={'mx-3 page-texts'}> {product.length}</span>
                        </div>
                        <ul className={'pagination '}>
                            <li onClick={PaginationPrev} aria-disabled={pageDisable}
                                className={`mx-2 page-bg page-link ${pageDisable===true ? 'd-none' : ''}`}>
                                {'<'}
                            </li>


                            <li className={'page-link'}> {page}</li>

                            <li onClick={PaginationNext} aria-disabled={pageDisebled}

                                className={`mx-2 page-link page-bg ${pageDisebled === true ? 'd-none' : ''}`}>{'>'}</li>
                        </ul>
                    </nav>
                </Pagination>
            </DivPag>
            <Pag></Pag>
        </Block>
    )
}
export default connect(({ProductPeducer:{backupp, loader}})=>({ backupp,loader})
    ,{getPost}) (History);