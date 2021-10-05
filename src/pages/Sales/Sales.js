import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import {shopToCard, delSale, getPost,getProducts} from "../../store/product_reducer";
import {
    Block,
    ProductTable,
    TdPrice,
    ProductName,
    Tables,
    Th,
    Td,
    BodyTable,
    ImgProduct,
    TdInfo, Pag,
    SelectCaregory,
    SearchInput,
    Pagination,
    DivPag,
    Sale,

} from "../Home/product";
import {InputSale,
    NavPanel,
    TableHeader,
    PlusShop,
    Cheks,
    SelectSale
    ,Div
} from './style'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Select} from "antd";

import 'antd/dist/antd.css';
import axios from "axios"; // or 'antd/dist/antd.less'




function Sales({salesProduct,shopToCard,card,delSale,getPost,backupp,getProducts,loader}) {

    const [Search, setSearch] = useState('');
    useEffect(()=>{getPost()},[])
    const [product, setProduct] = useState([]);
    const [page,setPage] = useState(1)

    const [pages, setPages] = useState(10)
    const [pages1, setPages1] = useState(false)
    const [pageDisebled, setpageDisabled] = useState(false)
    const [pageDisable, setPageDisable] = useState(true)



    useEffect(() => {
        axios({
            url: 'https://store-management-backend-app.herokuapp.com/api/v1/product',
            method: 'GET'
        }).then((res) => {
            setProduct(res.data)
            getProducts(res.data.filter((item,index)=>index>=0 && index<10))
        }).catch((err) => {
            console.log(err)
        });
        getPost();
    }, []);

    function filters (page){

        return product.filter((item,index)=> index>=(page-1)*10 && index<page*10)
    }


    useEffect(()=>{
        const res = filters(page)
        getProducts(res)
    },[page])
    function onNext(){
        setPage(prev => prev + 1)
    }
    function onPrev(){
        setPage(prev => prev - 1)
    }



    function Filters(val) {
        return product.filter((item) => item.category === val || val === '')
    }
    function Onselect(e) {
        const res = Filters(e.target.value)
        getProducts(res);
    }

    const { Option } = Select;

    function onChange(value) {
        const res = Filters(value)
        getProducts(res);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    function ToCard(item,index){shopToCard(item);}


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
            <Sale> Продажа  </Sale>
            <NavPanel>


                    <Select
                        className={'select'}
                        showSearch
                        style={{ width: 300 }}
                        placeholder="Категория"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>





                     <Div> </Div>
                <InputSale onChange={(e)=>setSearch(e.target.value)} placeholder={'Поиск'} type="text"/>
                <i className="bi bi-search posik"> </i>
            </NavPanel>
            <Tables>
                <ProductTable>
                    <TableHeader>
                        <tr className={'about-thead'} >
                            <Th>№</Th>
                            <Th>Изображение</Th>
                            <Th>Имя товара</Th>
                            <Th>О товаре</Th>
                            <Th>Количество</Th>
                            <Th>Цена</Th>
                            <Th>Покупка</Th>
                        </tr>
                    </TableHeader>
                    <BodyTable>
                        {
                         loader ?   backupp.
                            filter(item => {
                                if(item === ''){
                                    return item
                                }else if (item?.productName?.toUpperCase().includes(Search.toUpperCase())){
                                    return item
                                }
                            })
                       .map((item,index) =>
                                <tr  key={index}>
                                    <Td> <b>{index + 1}</b> </Td>
                                    <Td>
                                        <ImgProduct src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}/>
                                    </Td>
                                    <Td> <ProductName>{item.productName}</ProductName></Td>
                                    <Td> <TdInfo>
                                        <Popup   trigger={
                                            <div>{item.description.substr(0,6) }
                                            ...
                                            </div>} position=" center">
                                        {item.description}
                                    </Popup></TdInfo>
                                    </Td>
                                    <Td> <b>{item.amount}</b>  </Td>
                                    <TdPrice> {new Intl.NumberFormat().format(item.price)} UZS </TdPrice>
                                    <Td> {
                                        card.some((i)=>i.productId===item.id) ? (
                                            <Cheks onClick={()=>delSale(item)}>
                                                <i className="fas fa-check"> </i>
                                            </Cheks>
                                            )
                                            :
                                            <PlusShop onClick={()=>ToCard(item,index)}>
                                                <i className="fas fa-cart-arrow-down"> </i>
                                            </PlusShop>
                                    }
                                    </Td>
                                </tr>
                            )
                             :
                             <div className={'loader'}>
                             {/*loader worked*/}
                            </div>
                        }
                    </BodyTable>
                </ProductTable>

            </Tables>
            <DivPag className={'text-right'}>
                <Pagination >
                    <nav className={'pagination-nav'}>

                        <div className={'mb-3  page-texts'}>
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
            <Pag> </Pag>
        </Block>
    )
}

export default connect(
    ({ProductPeducer:{backup,card,backupp,loader}})=>({salesProduct:backup,card,backupp,loader}),
    {shopToCard,delSale,getPost,getProducts}
) (Sales)
